<script>
	import { base } from '$app/paths';
	import Icon from './Icon.svelte';
	import {
		GITHUB_URL,
		RELEASES_URL,
		ISSUES_URL,
		LICENSE_URL,
		BLOG_URL,
		DISCORD_URL,
		KOFI_URL
	} from '$lib/config.js';

	const year = 2026;

	const cols = [
		{
			title: 'Product',
			links: [
				{ label: 'Features', href: `${base}/#features` },
				{ label: 'Downloads', href: `${base}/#download` },
				{ label: 'Screenshots', href: `${base}/#screenshots` },
				{ label: 'Changelog', href: RELEASES_URL, external: true }
			]
		},
		{
			title: 'Resources',
			links: [
				{ label: 'Blog', href: BLOG_URL, external: true },
				{ label: 'Source', href: GITHUB_URL, external: true },
				{ label: 'Issues', href: ISSUES_URL, external: true },
				{ label: 'Discord', href: DISCORD_URL, external: true }
			]
		},
		{
			title: 'Company',
			links: [
				{ label: 'About', href: `${base}/about` },
				{ label: 'Imprint', href: `${base}/imprint` },
				{ label: 'Privacy', href: `${base}/privacy` }
			]
		}
	];
</script>

<footer class="mt-24 border-t border-[var(--color-line)] bg-[var(--color-canvas)]">
	<div class="mx-auto max-w-6xl px-5 py-14 sm:px-6">
		<div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
			<div>
				<a href="{base}/" class="flex items-center gap-2.5">
					<img src="{base}/brand-logo.png" alt="" width="30" height="30" class="h-[30px] w-[30px] rounded-[8px]" />
					<span class="text-[1.05rem] font-semibold tracking-tight text-[var(--color-ink)]">OnionHop</span>
				</a>
				<p class="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
					A privacy-first desktop client that routes your traffic through Tor. Windows, Linux and macOS.
				</p>
				<a
					href={KOFI_URL}
					target="_blank"
					rel="noreferrer"
					class="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#ff5e5b] px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#ff4b47]"
				>
					<Icon name="kofi" size={17} />
					Support on Ko-fi
				</a>
			</div>

			{#each cols as col}
				<div>
					<h4 class="text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
						{col.title}
					</h4>
					<ul class="mt-4 space-y-2.5">
						{#each col.links as l}
							<li>
								<a
									href={l.href}
									target={l.external ? '_blank' : undefined}
									rel={l.external ? 'noreferrer' : undefined}
									class="link-muted inline-flex items-center gap-1 text-sm"
								>
									{l.label}
									{#if l.external}<Icon name="external" size={12} stroke={1.8} class="opacity-45" />{/if}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div
			class="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center"
		>
			<p>
				© {year} Rana GmbH ·
				<a href={LICENSE_URL} target="_blank" rel="noreferrer" class="link-muted underline">GPL-3.0</a>
			</p>
			<p class="max-w-md sm:text-right">
				An independent project. Not affiliated with or endorsed by The Tor Project.
			</p>
		</div>
	</div>
</footer>
