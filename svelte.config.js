import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Static, prerendered marketing site — no server runtime.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		// Emit relative asset/link URLs so the site works whether it is served from a domain root
		// or a project subpath (matching how the previous static site behaved).
		paths: { relative: true }
	}
};

export default config;
