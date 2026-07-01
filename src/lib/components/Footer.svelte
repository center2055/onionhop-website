<script>
	import { base } from '$app/paths';
	import Icon from './Icon.svelte';
	import { t } from '$lib/i18n/locale.svelte.js';
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
			title: 'foot.product',
			links: [
				{ label: 'nav.features', href: `${base}/#features` },
				{ label: 'nav.downloads', href: `${base}/#download` },
				{ label: 'nav.screenshots', href: `${base}/#screenshots` },
				{ label: 'foot.changelog', href: RELEASES_URL, external: true }
			]
		},
		{
			title: 'foot.resources',
			links: [
				{ label: 'nav.blog', href: BLOG_URL, external: true },
				{ label: 'foot.source', href: GITHUB_URL, external: true },
				{ label: 'foot.issues', href: ISSUES_URL, external: true },
				{ label: 'foot.discord', href: DISCORD_URL, external: true }
			]
		},
		{
			title: 'foot.company',
			links: [
				{ label: 'foot.about', href: `${base}/about` },
				{ label: 'foot.imprint', href: `${base}/imprint` },
				{ label: 'foot.privacy', href: `${base}/privacy` }
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
					{t('foot.tagline')}
				</p>
				<a
					href={KOFI_URL}
					target="_blank"
					rel="noreferrer"
					class="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#ff5e5b] px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#ff4b47]"
				>
					<Icon name="kofi" size={17} />
					{t('foot.kofi')}
				</a>
			</div>

			{#each cols as col}
				<div>
					<h4 class="text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
						{t(col.title)}
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
									{t(l.label)}
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
			<p class="max-w-md sm:text-end">
				{t('foot.disclaimer')}
			</p>
		</div>
	</div>
</footer>
