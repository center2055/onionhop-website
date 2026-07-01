<script>
	import { base } from '$app/paths';
	import Icon from './Icon.svelte';
	import { BLOG_URL, GITHUB_URL } from '$lib/config.js';

	let open = $state(false);
	let scrolled = $state(false);

	const links = [
		{ label: 'Features', href: `${base}/#features` },
		{ label: 'Screenshots', href: `${base}/#screenshots` },
		{ label: 'Downloads', href: `${base}/#download` },
		{ label: 'Blog', href: BLOG_URL, external: true },
		{ label: 'GitHub', href: GITHUB_URL, external: true }
	];

	function onScroll() {
		scrolled = window.scrollY > 8;
	}
</script>

<svelte:window on:scroll={onScroll} />

<header
	class="sticky top-0 z-40 transition-colors duration-300 {scrolled
		? 'border-b border-[var(--color-line)] bg-[var(--color-canvas)]/80 backdrop-blur-xl'
		: 'border-b border-transparent'}"
>
	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
		<a href="{base}/" class="group flex items-center gap-2.5" aria-label="OnionHop home">
			<img
				src="{base}/brand-logo.png"
				alt=""
				width="32"
				height="32"
				class="h-8 w-8 rounded-[9px] transition-transform duration-300 group-hover:scale-105"
			/>
			<span class="text-[1.05rem] font-semibold tracking-tight text-[var(--color-ink)]">OnionHop</span>
		</a>

		<div class="hidden items-center gap-1 md:flex">
			{#each links as l}
				<a
					href={l.href}
					target={l.external ? '_blank' : undefined}
					rel={l.external ? 'noreferrer' : undefined}
					class="link-muted inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[0.92rem] font-medium hover:bg-white/5"
				>
					{l.label}
					{#if l.external}<Icon name="external" size={13} stroke={1.8} class="opacity-50" />{/if}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-2">
			<a href="{base}/#download" class="btn btn-primary hidden text-sm sm:inline-flex">
				<Icon name="download" size={16} />
				Download
			</a>
			<button
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)] md:hidden"
				aria-label="Menu"
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<Icon name={open ? 'close' : 'menu'} size={20} />
			</button>
		</div>
	</nav>

	{#if open}
		<div class="border-t border-[var(--color-line)] bg-[var(--color-canvas)]/95 backdrop-blur-xl md:hidden">
			<div class="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
				{#each links as l}
					<a
						href={l.href}
						target={l.external ? '_blank' : undefined}
						rel={l.external ? 'noreferrer' : undefined}
						class="flex items-center justify-between rounded-lg px-3 py-2.5 text-[var(--color-ink-soft)] hover:bg-white/5"
						onclick={() => (open = false)}
					>
						{l.label}
						{#if l.external}<Icon name="external" size={14} stroke={1.8} class="opacity-50" />{/if}
					</a>
				{/each}
				<a href="{base}/#download" class="btn btn-primary mt-2 text-sm" onclick={() => (open = false)}>
					<Icon name="download" size={16} />
					Download
				</a>
			</div>
		</div>
	{/if}
</header>
