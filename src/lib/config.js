// Central place for the handful of URLs and constants the site references.

export const REPO = { owner: 'center2055', repo: 'OnionHop' };

export const GITHUB_URL = `https://github.com/${REPO.owner}/${REPO.repo}`;
export const RELEASES_URL = `${GITHUB_URL}/releases`;
export const ISSUES_URL = `${GITHUB_URL}/issues`;
export const LICENSE_URL = `${GITHUB_URL}/blob/master/LICENSE`;
export const RAW_BASE = `https://raw.githubusercontent.com/${REPO.owner}/${REPO.repo}/master`;

// External links.
export const BLOG_URL = 'https://www.rana-blog.de/';
export const COMPANY_URL = 'https://www.ranagmbh.de/';
export const DISCORD_URL = 'https://discord.gg/y3MVspPzKQ';
export const KOFI_URL = 'https://ko-fi.com/center2055';
export const FMHY_URL = 'https://fmhy.net/privacy';

// Showcase walkthrough video (Gumlet embed).
export const VIDEO_EMBED =
	'https://play.gumlet.io/embed/6a19e2e81bc4884e66764e87?background=false&autoplay=false&loop=false';

// GitHub stopped counting downloads for the deleted v2.x releases; add them back so the
// public total reflects reality rather than only what the current releases report.
export const DOWNLOAD_BASELINE = 26000;

export const CONTACT_EMAIL = 'info@ranagmbh.de';
