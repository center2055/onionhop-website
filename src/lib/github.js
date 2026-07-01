import { REPO, DOWNLOAD_BASELINE } from './config.js';

const API = `https://api.github.com/repos/${REPO.owner}/${REPO.repo}`;
const CACHE_KEY = 'onionhop.github.cache.v4';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

const GH_HEADERS = { Accept: 'application/vnd.github+json' };

async function fetchJson(url, timeoutMs = 9000) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), timeoutMs);
	try {
		const res = await fetch(url, { headers: GH_HEADERS, signal: ctrl.signal });
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		return await res.json();
	} finally {
		clearTimeout(t);
	}
}

function readCache() {
	try {
		const raw = localStorage.getItem(CACHE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed || Date.now() - parsed.at > CACHE_TTL) return null;
		return parsed.data;
	} catch {
		return null;
	}
}

function writeCache(data) {
	try {
		localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
	} catch {
		/* private mode / quota — ignore */
	}
}

function mapRelease(r) {
	return {
		tag: r.tag_name,
		name: r.name || r.tag_name,
		prerelease: !!r.prerelease,
		publishedAt: r.published_at,
		htmlUrl: r.html_url,
		assets: (r.assets || [])
			.map((a) => ({
				name: a.name,
				size: a.size,
				downloads: a.download_count || 0,
				url: a.browser_download_url
			}))
			.filter((a) => !a.name.endsWith('.sha256.txt'))
	};
}

/**
 * Loads repo + release data, using a 1-hour localStorage cache. Never throws:
 * on failure it returns { ok:false } so the UI can degrade gracefully.
 */
export async function loadReleaseData() {
	const cached = readCache();
	if (cached) return cached;

	try {
		const [repo, releases] = await Promise.all([
			fetchJson(API),
			fetchJson(`${API}/releases?per_page=100`)
		]);

		const list = Array.isArray(releases) ? releases.map(mapRelease) : [];
		const downloads =
			DOWNLOAD_BASELINE +
			list.reduce((sum, r) => sum + r.assets.reduce((s, a) => s + a.downloads, 0), 0);

		const stable = list.find((r) => !r.prerelease) || list[0] || null;
		const prerelease = list.find((r) => r.prerelease) || null;

		const data = {
			ok: true,
			stars: repo?.stargazers_count ?? null,
			downloads,
			version: stable?.tag || null,
			stable,
			prerelease,
			releases: list
		};
		writeCache(data);
		return data;
	} catch {
		return { ok: false, stars: null, downloads: null, version: null, stable: null, prerelease: null, releases: [] };
	}
}

/* ---------------- formatting ---------------- */

export function formatBytes(bytes) {
	if (!bytes || bytes < 0) return '';
	const units = ['B', 'KB', 'MB', 'GB'];
	let v = bytes;
	let i = 0;
	while (v >= 1024 && i < units.length - 1) {
		v /= 1024;
		i++;
	}
	return `${v.toFixed(v >= 100 || i === 0 ? 0 : 1)} ${units[i]}`;
}

export function formatCount(n) {
	if (n == null) return '—';
	if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
	return String(n);
}

/* ---------------- asset classification ---------------- */

export function classifyAsset(name) {
	const n = name.toLowerCase();
	const family = /cli/.test(n) ? 'cli' : 'gui';

	let platform = 'other';
	if (/(\.exe|\.msi|windows|win-x64|win64|win32)/.test(n)) platform = 'windows';
	else if (/(\.dmg|macos|darwin|osx)/.test(n)) platform = 'macos';
	else if (/(\.appimage|\.deb|\.rpm|\.tar\.gz|linux)/.test(n)) platform = 'linux';

	let kind = 'other';
	if (/(setup|installer|\.msi)/.test(n)) kind = 'installer';
	else if (/portable|\.zip|\.tar\.gz|\.appimage/.test(n)) kind = 'portable';

	return { family, platform, kind };
}

const PLATFORMS = ['windows', 'macos', 'linux'];

export function detectPlatform() {
	if (typeof navigator === 'undefined') return 'windows';
	const ua = navigator.userAgent.toLowerCase();
	if (/mac|iphone|ipad/.test(ua)) return 'macos';
	if (/linux|x11|android/.test(ua)) return 'linux';
	return 'windows';
}

export function platformLabel(p) {
	return { windows: 'Windows', macos: 'macOS', linux: 'Linux' }[p] || p;
}

export { PLATFORMS };

/** Picks the best asset to feature for a platform (installers win over portables). */
export function bestAssetFor(platform, assets, family = 'gui') {
	let best = null;
	let bestScore = -1;
	for (const a of assets) {
		const c = classifyAsset(a.name);
		if (c.platform !== platform || c.family !== family) continue;
		let score = 1;
		if (c.kind === 'installer') score += 3;
		else if (c.kind === 'portable') score += 1;
		if (platform === 'windows' && /\.exe$/i.test(a.name)) score += 2;
		if (platform === 'macos' && /\.dmg$/i.test(a.name)) score += 2;
		if (platform === 'linux' && /\.appimage$/i.test(a.name)) score += 2;
		if (score > bestScore) {
			bestScore = score;
			best = a;
		}
	}
	return best;
}
