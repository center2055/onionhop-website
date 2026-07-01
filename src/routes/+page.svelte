<script>
	import { base } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import RoutingMotif from '$lib/components/RoutingMotif.svelte';
	import LiveStats from '$lib/components/LiveStats.svelte';
	import Downloads from '$lib/components/Downloads.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import { GITHUB_URL, VIDEO_EMBED } from '$lib/config.js';

	let lightbox = $state(null);

	const features = [
		{
			icon: 'route',
			title: 'Proxy mode',
			body: 'Route traffic through Tor with a local SOCKS proxy. Lightweight, no admin rights required.'
		},
		{
			icon: 'globe',
			title: 'TUN / VPN mode',
			body: 'Send every app system-wide through Tor, not just your browser. One switch, whole machine.'
		},
		{
			icon: 'split',
			title: 'Split tunneling',
			body: 'Choose which apps go through Tor and which connect directly. Hybrid routing, your rules.'
		},
		{
			icon: 'spark',
			title: 'Smart Connect',
			body: 'Automatically picks the best engine, bridges and route for the network you are on.'
		},
		{
			icon: 'bridge',
			title: 'Bridges & transports',
			body: 'obfs4, snowflake, webtunnel, conjure, meek and dnstt to get through restrictive networks.'
		},
		{
			icon: 'layers',
			title: 'Country & site routing',
			body: 'Keep whole countries direct or block domain categories by IP, with auto-updating lists.'
		},
		{
			icon: 'power',
			title: 'Kill switch',
			body: 'If Tor drops, outbound traffic is blocked instantly so nothing slips out unprotected.'
		},
		{
			icon: 'dns',
			title: 'DNS controls',
			body: 'Force DNS through Tor and stop lookups leaking to your ISP. QUIC/UDP leak protection too.'
		},
		{
			icon: 'terminal',
			title: 'CLI companion',
			body: 'A headless command-line client for servers, scripts and automation. Same engine, no GUI.'
		}
	];

	const engines = ['Classic (tor)', 'Arti', 'ArtiHop'];
	const transports = ['obfs4', 'snowflake', 'webtunnel', 'conjure', 'meek', 'dnstt', 'vanilla'];
	const platforms = [
		{ icon: 'windows', label: 'Windows' },
		{ icon: 'linux', label: 'Linux' },
		{ icon: 'apple', label: 'macOS' }
	];

	const shots = [
		{ src: `${base}/GUI.png`, alt: 'OnionHop desktop app', label: 'Desktop app' },
		{ src: `${base}/cli.svg`, alt: 'OnionHop command-line client', label: 'Command line' }
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
	<div class="grid-backdrop pointer-events-none absolute inset-0 -z-10"></div>
	<div
		class="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
		style="background: radial-gradient(closest-side, rgba(124,58,237,0.55), transparent)"
	></div>

	<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
		<div class="rise">
			<span class="chip mb-5">
				<span class="h-1.5 w-1.5 rounded-full bg-[var(--color-signal-400)]"></span>
				Free & open source · GPL-3.0
			</span>
			<h1 class="text-[2.6rem] font-bold leading-[1.05] sm:text-6xl">
				Route your traffic through <span class="text-[var(--color-brand-400)]">Tor</span>, with
				clear controls.
			</h1>
			<p class="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
				OnionHop is a privacy-first desktop client. Pick a lightweight proxy or route your whole
				system, turn on bridges for restrictive networks, and keep leaks in check — all from a clean
				cross-platform app.
			</p>

			<div class="mt-7 flex flex-wrap items-center gap-3">
				<a href="#download" class="btn btn-primary text-base">
					<Icon name="download" size={18} /> Download latest
				</a>
				<a href={GITHUB_URL} target="_blank" rel="noreferrer" class="btn btn-ghost text-base">
					<Icon name="github" size={18} /> View on GitHub
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
				<RoutingMotif class="pointer-events-none absolute inset-0 h-full w-full opacity-40" />
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
							<Icon name="expand" size={15} stroke={2} /> Expand
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
		<h2 class="text-3xl font-bold sm:text-4xl">Built for restrictive networks</h2>
		<p class="mt-3 text-lg text-[var(--color-ink-soft)]">
			Everything you need to route, censor-proof and lock down your connection — without the
			guesswork.
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
				<h3 class="mt-4 text-[1.05rem] font-semibold text-[var(--color-ink)]">{f.title}</h3>
				<p class="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{f.body}</p>
			</div>
		{/each}
	</div>
</section>

<!-- ===================== BRIDGES HIGHLIGHT ===================== -->
<section class="mx-auto max-w-6xl px-5 py-8 sm:px-6">
	<div class="card overflow-hidden">
		<div class="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-2">
			<div>
				<span class="chip mb-4"><Icon name="bridge" size={14} /> Censorship circumvention</span>
				<h2 class="text-2xl font-bold sm:text-3xl">When Tor itself is blocked, bridges get you through.</h2>
				<p class="mt-4 leading-relaxed text-[var(--color-ink-soft)]">
					A built-in bridge scanner finds working bridges and tests them from your network, so you
					are not pasting lines by hand. Switch pluggable transports with a click, or let Smart
					Connect race them and pick the one that connects.
				</p>
				<div class="mt-6 flex flex-wrap gap-2">
					{#each transports as t}
						<span class="chip text-[var(--color-ink-soft)]">{t}</span>
					{/each}
				</div>
			</div>
			<div class="relative">
				<div
					class="pointer-events-none absolute inset-0 rounded-2xl opacity-40 blur-2xl"
					style="background: radial-gradient(closest-side, rgba(34,211,238,0.35), transparent)"
				></div>
				<RoutingMotif class="relative w-full" />
			</div>
		</div>
	</div>
</section>

<!-- ===================== SCREENSHOTS + VIDEO ===================== -->
<section id="screenshots" class="mx-auto max-w-6xl px-5 py-16 sm:px-6">
	<div class="max-w-2xl">
		<h2 class="text-3xl font-bold sm:text-4xl">See it in action</h2>
		<p class="mt-3 text-lg text-[var(--color-ink-soft)]">
			A focused desktop app and a matching command-line client — same engine underneath.
		</p>
	</div>

	<div class="mt-10 grid gap-4 lg:grid-cols-2">
		{#each shots as s}
			<button
				class="card group relative block overflow-hidden p-2 text-left"
				onclick={() => (lightbox = s.src)}
				aria-label={`Expand ${s.label} screenshot`}
			>
				<img
					src={s.src}
					alt={s.alt}
					class="w-full rounded-[0.9rem] border border-[var(--color-line)]"
					loading="lazy"
				/>
				<span class="absolute left-4 top-4 chip bg-[var(--color-canvas)]/80 backdrop-blur">{s.label}</span>
				<span
					class="absolute inset-2 flex items-center justify-center rounded-[0.9rem] bg-black/0 opacity-0 transition-all group-hover:bg-black/25 group-hover:opacity-100"
				>
					<span class="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-black">
						<Icon name="expand" size={15} stroke={2} /> Expand
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
				Tor engines
			</h3>
			<ul class="mt-3 space-y-2">
				{#each engines as e}
					<li class="flex items-center gap-2 text-[var(--color-ink)]">
						<Icon name="check" size={16} class="text-[var(--color-brand-400)]" />{e}
					</li>
				{/each}
			</ul>
		</div>
		<div class="card p-6">
			<h3 class="text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
				Pluggable transports
			</h3>
			<div class="mt-3 flex flex-wrap gap-2">
				{#each transports as t}<span class="chip text-[var(--color-ink-soft)]">{t}</span>{/each}
			</div>
		</div>
		<div class="card p-6">
			<h3 class="text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
				Platforms
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
		<h2 class="text-3xl font-bold sm:text-4xl">Download OnionHop</h2>
		<p class="mt-3 text-lg text-[var(--color-ink-soft)]">
			Latest release, straight from GitHub. Installers and portable builds for every platform.
		</p>
	</div>
	<div class="mt-10"><Downloads /></div>
</section>
