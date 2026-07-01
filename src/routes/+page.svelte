<script>
	import { base } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import RoutingMotif from '$lib/components/RoutingMotif.svelte';
	import LiveStats from '$lib/components/LiveStats.svelte';
	import Downloads from '$lib/components/Downloads.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import { t } from '$lib/i18n/locale.svelte.js';
	import { GITHUB_URL, VIDEO_EMBED } from '$lib/config.js';

	let lightbox = $state(null);

	const features = [
		{ icon: 'route', tk: 'feat.proxy.t', bk: 'feat.proxy.b' },
		{ icon: 'globe', tk: 'feat.tunvpn.t', bk: 'feat.tunvpn.b' },
		{ icon: 'split', tk: 'feat.split.t', bk: 'feat.split.b' },
		{ icon: 'spark', tk: 'feat.smart.t', bk: 'feat.smart.b' },
		{ icon: 'bridge', tk: 'feat.bridges.t', bk: 'feat.bridges.b' },
		{ icon: 'layers', tk: 'feat.geo.t', bk: 'feat.geo.b' },
		{ icon: 'power', tk: 'feat.kill.t', bk: 'feat.kill.b' },
		{ icon: 'dns', tk: 'feat.dns.t', bk: 'feat.dns.b' },
		{ icon: 'terminal', tk: 'feat.cli.t', bk: 'feat.cli.b' }
	];

	const engines = [
		{ label: 'Classic (tor)', href: 'https://gitlab.torproject.org/tpo/core/tor' },
		{ label: 'Arti', href: 'https://gitlab.torproject.org/tpo/core/arti' },
		{ label: 'ArtiHop', href: 'https://github.com/center2055/ArtiHop' }
	];
	const transports = ['obfs4', 'snowflake', 'webtunnel', 'conjure', 'meek', 'dnstt', 'vanilla'];
	const platforms = [
		{ icon: 'windows', label: 'Windows' },
		{ icon: 'linux', label: 'Linux' },
		{ icon: 'apple', label: 'macOS' }
	];

	const shots = [
		{ src: `${base}/GUI.png`, alt: 'OnionHop desktop app', labelKey: 'shots.desktop' },
		{ src: `${base}/cli.png`, alt: 'OnionHop command-line client', labelKey: 'shots.cli' }
	];
</script>

<svelte:head>
	<title>OnionHop — route your traffic through Tor, with clear controls</title>
	<meta
		name="description"
		content="OnionHop is a privacy-first desktop client that routes your traffic through Tor. Proxy and system-wide VPN modes, bridges for censored networks, split tunneling, a kill switch and a CLI. Windows, Linux and macOS."
	/>
</svelte:head>

<Lightbox bind:src={lightbox} />

<!-- ===================== HERO ===================== -->
<section class="relative overflow-hidden">
	<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
		<div class="rise">
			<h1 class="text-[2.6rem] font-bold leading-[1.05] sm:text-6xl">
				{t('hero.title')}
			</h1>
			<p class="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
				{t('hero.subtitle')}
			</p>

			<div class="mt-7 flex flex-wrap items-center gap-3">
				<a href="#download" class="btn btn-primary text-base">
					<Icon name="download" size={18} /> {t('hero.download')}
				</a>
				<a href={GITHUB_URL} target="_blank" rel="noreferrer" class="btn btn-ghost text-base">
					<Icon name="github" size={18} /> {t('hero.github')}
				</a>
			</div>

			<div class="mt-9"><LiveStats /></div>

			<div class="mt-7 flex flex-wrap gap-2">
				{#each platforms as p}
					<span class="chip"><Icon name={p.icon} size={14} /> {p.label}</span>
				{/each}
			</div>
		</div>

		<div class="rise relative" style="animation-delay: 0.12s">
			<div class="card relative overflow-hidden p-2">
				<button
					class="group relative block w-full overflow-hidden rounded-[0.9rem]"
					onclick={() => (lightbox = `${base}/GUI.png`)}
					aria-label="Open desktop app screenshot"
				>
					<img
						src="{base}/GUI.png"
						alt="OnionHop desktop app"
						class="w-full rounded-[0.9rem] border border-[var(--color-line)]"
						loading="eager"
					/>
					<span
						class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/25 group-hover:opacity-100"
					>
						<span class="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-black">
							<Icon name="expand" size={15} stroke={2} /> {t('shots.expand')}
						</span>
					</span>
				</button>
			</div>
			<div class="mt-3 flex flex-wrap justify-center gap-2">
				{#each ['Proxy', 'TUN/VPN', 'Bridges', 'Split tunneling'] as t}
					<span class="chip">{t}</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ===================== FEATURES ===================== -->
<section id="features" class="mx-auto max-w-6xl px-5 py-16 sm:px-6">
	<div class="max-w-2xl">
		<h2 class="text-3xl font-bold sm:text-4xl">{t('feat.heading')}</h2>
		<p class="mt-3 text-lg text-[var(--color-ink-soft)]">
			{t('feat.subtitle')}
		</p>
	</div>

	<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each features as f}
			<div class="card group p-6 transition-shadow hover:shadow-[var(--shadow-float)]">
				<span
					class="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-brand-400)] transition-colors group-hover:border-[var(--color-brand-500)]"
				>
					<Icon name={f.icon} size={22} />
				</span>
				<h3 class="mt-4 text-[1.05rem] font-semibold text-[var(--color-ink)]">{t(f.tk)}</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{t(f.bk)}</p>
			</div>
		{/each}
	</div>
</section>

<!-- ===================== BRIDGES HIGHLIGHT ===================== -->
<section class="mx-auto max-w-6xl px-5 py-8 sm:px-6">
	<div class="card overflow-hidden">
		<div class="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-2">
			<div>
				<span class="chip mb-4"><Icon name="bridge" size={14} /> {t('bridges.badge')}</span>
				<h2 class="text-2xl font-bold sm:text-3xl">{t('bridges.heading')}</h2>
				<p class="mt-4 leading-relaxed text-[var(--color-ink-soft)]">
					{t('bridges.body')}
				</p>
				<div class="mt-6 flex flex-wrap gap-2">
					{#each transports as t}
						<span class="chip text-[var(--color-ink-soft)]">{t}</span>
					{/each}
				</div>
			</div>
			<div class="relative">
				<RoutingMotif class="relative w-full" />
			</div>
		</div>
	</div>
</section>

<!-- ===================== SCREENSHOTS + VIDEO ===================== -->
<section id="screenshots" class="mx-auto max-w-6xl px-5 py-16 sm:px-6">
	<div class="max-w-2xl">
		<h2 class="text-3xl font-bold sm:text-4xl">{t('shots.heading')}</h2>
		<p class="mt-3 text-lg text-[var(--color-ink-soft)]">
			{t('shots.subtitle')}
		</p>
	</div>

	<div class="mt-10 grid gap-4 lg:grid-cols-2">
		{#each shots as s}
			<button
				class="card group relative block overflow-hidden p-2 text-left"
				onclick={() => (lightbox = s.src)}
				aria-label={`${t('shots.expand')} — ${t(s.labelKey)}`}
			>
				<img
					src={s.src}
					alt={s.alt}
					class="w-full rounded-[0.9rem] border border-[var(--color-line)]"
					loading="lazy"
				/>
				<span class="absolute start-4 top-4 chip bg-[var(--color-canvas)]/80 backdrop-blur">{t(s.labelKey)}</span>
				<span
					class="absolute inset-2 flex items-center justify-center rounded-[0.9rem] bg-black/0 opacity-0 transition-all group-hover:bg-black/25 group-hover:opacity-100"
				>
					<span class="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-black">
						<Icon name="expand" size={15} stroke={2} /> {t('shots.expand')}
					</span>
				</span>
			</button>
		{/each}
	</div>

	<div class="mt-6 card overflow-hidden p-2">
		<div class="relative w-full overflow-hidden rounded-[0.9rem]" style="aspect-ratio: 16 / 9">
			<iframe
				src={VIDEO_EMBED}
				title="OnionHop walkthrough"
				loading="lazy"
				allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
				class="absolute inset-0 h-full w-full border-0"
			></iframe>
		</div>
	</div>
</section>

<!-- ===================== BUILDING BLOCKS ===================== -->
<section class="mx-auto max-w-6xl px-5 py-8 sm:px-6">
	<div class="grid gap-4 md:grid-cols-3">
		<div class="card p-6">
			<h3 class="text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
				{t('blocks.engines')}
			</h3>
			<ul class="mt-3 space-y-2">
				{#each engines as e}
					<li>
						<a
							href={e.href}
							target="_blank"
							rel="noreferrer"
							class="group flex items-center gap-2 text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand-300)]"
						>
							<Icon name="check" size={16} class="text-[var(--color-brand-400)]" />{e.label}
							<Icon name="external" size={12} stroke={1.8} class="ms-auto opacity-40 transition-opacity group-hover:opacity-80" />
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="card p-6">
			<h3 class="text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
				{t('blocks.transports')}
			</h3>
			<div class="mt-3 flex flex-wrap gap-2">
				{#each transports as t}<span class="chip text-[var(--color-ink-soft)]">{t}</span>{/each}
			</div>
		</div>
		<div class="card p-6">
			<h3 class="text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
				{t('blocks.platforms')}
			</h3>
			<ul class="mt-3 space-y-2">
				{#each platforms as p}
					<li class="flex items-center gap-2 text-[var(--color-ink)]">
						<Icon name={p.icon} size={16} class="text-[var(--color-ink-soft)]" />{p.label}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- ===================== DOWNLOAD ===================== -->
<section id="download" class="mx-auto max-w-6xl px-5 py-16 sm:px-6">
	<div class="max-w-2xl">
		<h2 class="text-3xl font-bold sm:text-4xl">{t('dl.heading')}</h2>
		<p class="mt-3 text-lg text-[var(--color-ink-soft)]">
			{t('dl.subtitle')}
		</p>
	</div>
	<div class="mt-10"><Downloads /></div>
</section>
