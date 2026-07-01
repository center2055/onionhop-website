import { messages, LOCALES, RTL_LOCALES } from './messages.js';

const STORAGE_KEY = 'onionhop.lang';

export const localeState = $state({ code: 'en' });

function isSupported(code) {
	return LOCALES.some((l) => l.code === code);
}

function detect() {
	if (typeof navigator === 'undefined') return 'en';
	const cands = [navigator.language, ...(navigator.languages || [])];
	for (const raw of cands) {
		if (!raw) continue;
		const low = raw.toLowerCase();
		const base = low.split('-')[0];
		if (isSupported(low)) return low;
		if (isSupported(base)) return base;
	}
	return 'en';
}

function applyDir(code) {
	if (typeof document === 'undefined') return;
	document.documentElement.lang = code;
	document.documentElement.dir = RTL_LOCALES.includes(code) ? 'rtl' : 'ltr';
}

export function initLocale() {
	let code = 'en';
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		code = saved && isSupported(saved) ? saved : detect();
	} catch {
		code = detect();
	}
	localeState.code = code;
	applyDir(code);
}

export function setLocale(code) {
	if (!isSupported(code)) return;
	localeState.code = code;
	applyDir(code);
	try {
		localStorage.setItem(STORAGE_KEY, code);
	} catch {
		/* ignore */
	}
}

export function isRtl() {
	return RTL_LOCALES.includes(localeState.code);
}

/** Translate a dotted key, falling back to English then to the key itself. */
export function t(key) {
	const dict = messages[localeState.code] || messages.en;
	return dict[key] ?? messages.en[key] ?? key;
}

/** Translate with {placeholder} substitution. */
export function tf(key, vars = {}) {
	let s = t(key);
	for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v);
	return s;
}
