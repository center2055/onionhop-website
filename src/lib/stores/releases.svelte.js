import { loadReleaseData } from '$lib/github.js';

// Shared, load-once release/stats state. Components read `releaseState` and call
// `ensureReleases()` on mount; the fetch runs a single time per page load.
export const releaseState = $state({
	loaded: false,
	ok: false,
	stars: null,
	downloads: null,
	version: null,
	stable: null,
	prerelease: null,
	releases: []
});

let started = false;

export function ensureReleases() {
	if (started || typeof window === 'undefined') return;
	started = true;
	loadReleaseData().then((d) => {
		releaseState.ok = d.ok;
		releaseState.stars = d.stars;
		releaseState.downloads = d.downloads;
		releaseState.version = d.version;
		releaseState.stable = d.stable;
		releaseState.prerelease = d.prerelease;
		releaseState.releases = d.releases;
		releaseState.loaded = true;
	});
}
