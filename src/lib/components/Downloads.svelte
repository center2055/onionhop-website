<script>
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
	import { releaseState, ensureReleases } from '$lib/stores/releases.svelte.js';
	import {
		classifyAsset,
		formatBytes,
		formatCount,
		detectPlatform,
		platformLabel,
		bestAssetFor,
		PLATFORMS
	} from '$lib/github.js';
	import { RELEASES_URL } from '$lib/config.js';

	let channel = $state('stable');
	let platformFilter = $state('all');
	let family = $state('gui');
	let myPlatform = $state('windows');

	onMount(() => {
		ensureReleases();
		myPlatform = detectPlatform();
		platformFilter = myPlatform;
	});

	const activeRelease = $derived(
		channel === 'prerelease' ? releaseState.prerelease : releaseState.stable
	);

	const featured = $derived(
		activeRelease ? bestAssetFor(myPlatform, activeRelease.assets, family) : null
	);

	const filtered = $derived(
		(activeRelease?.assets ?? [])
			.map((a) => ({ ...a, meta: classifyAsset(a.name) }))
			.filter((a) => a.meta.family === family)
			.filter((a) => platformFilter === 'all' || a.meta.platform === platformFilter)
			.sort((a, b) => b.downloads - a.downloads)
	);

	const platIcon = { windows: 'windows', macos: 'apple', linux: 'linux' };

	function fmtDate(iso) {
		if (!iso) return '';
		try {
			return new Date(iso).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			});
		} catch {
			return '';
		}
	}
</script>

<div class="grid gap-6 lg:grid-cols-[0.9fr_1.3fr]">
	<!-- left: featured CTA + release meta -->
	<div class="card flex flex-col p-6">
		<div class="flex items-center gap-2 text-sm text-[var(--color-muted)]">
			<Icon name={platIcon[myPlatform]} size={18} class="text-[var(--color-ink)]" />
			Recommended for {platformLabel(myPlatform)}
		</div>

		{#if !releaseState.loaded}
			<div class="mt-4 h-12 w-full animate-pulse rounded-xl bg-[var(--color-surface-2)]"></div>
			<div class="mt-3 h-4 w-2/3 animate-pulse rounded bg-[var(--color-surface-2)]"></div>
		{:else if featured}
			<a href={featured.url} class="btn btn-primary mt-4 text-base">
				<Icon name="download" size={18} />
				Download for {platformLabel(myPlatform)}
			</a>
			<p class="tnum mt-3 text-sm text-[var(--color-muted)]">
				{featured.name} · {formatBytes(featured.size)}
			</p>
		{:else if releaseState.ok}
			<p class="mt-4 text-sm text-[var(--color-muted)]">
				No {family === 'cli' ? 'CLI' : 'GUI'} build for {platformLabel(myPlatform)} in this release yet.
			</p>
			<a href={RELEASES_URL} target="_blank" rel="noreferrer" class="btn btn-ghost mt-4 text-sm">
				Browse all releases
			</a>
		{:else}
			<p class="mt-4 text-sm text-[var(--color-muted)]">
				Live data could not be loaded. You can still grab everything on GitHub.
			</p>
			<a href={RELEASES_URL} target="_blank" rel="noreferrer" class="btn btn-primary mt-4 text-sm">
				<Icon name="download" size={16} /> All releases
			</a>
		{/if}

		{#if activeRelease}
			<div class="mt-auto flex items-center justify-between border-t border-[var(--color-line)] pt-4 text-sm">
				<span class="font-medium text-[var(--color-ink)]">{activeRelease.name}</span>
				<span class="text-[var(--color-muted)]">{fmtDate(activeRelease.publishedAt)}</span>
			</div>
		{/if}
	</div>

	<!-- right: filters + asset list -->
	<div class="card flex flex-col p-6">
		<div class="flex flex-wrap items-center gap-2">
			<div class="inline-flex rounded-lg border border-[var(--color-line)] p-0.5">
				<button
					class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors {family === 'gui'
						? 'bg-[var(--color-brand-600)] text-white'
						: 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'}"
					onclick={() => (family = 'gui')}>GUI</button
				>
				<button
					class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors {family === 'cli'
						? 'bg-[var(--color-brand-600)] text-white'
						: 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'}"
					onclick={() => (family = 'cli')}>CLI</button
				>
			</div>

			<div class="ml-auto inline-flex flex-wrap gap-1">
				<button
					class="chip {platformFilter === 'all' ? 'border-[var(--color-brand-500)] text-[var(--color-ink)]' : ''}"
					onclick={() => (platformFilter = 'all')}>All</button
				>
				{#each PLATFORMS as p}
					<button
						class="chip {platformFilter === p ? 'border-[var(--color-brand-500)] text-[var(--color-ink)]' : ''}"
						onclick={() => (platformFilter = p)}
					>
						<Icon name={platIcon[p]} size={13} />
						{platformLabel(p)}
					</button>
				{/each}
			</div>
		</div>

		<div class="mt-2 inline-flex w-fit rounded-lg border border-[var(--color-line)] p-0.5 text-sm">
			<button
				class="rounded-md px-3 py-1 font-medium transition-colors {channel === 'stable'
					? 'bg-[var(--color-surface-2)] text-[var(--color-ink)]'
					: 'text-[var(--color-muted)]'}"
				onclick={() => (channel = 'stable')}>Stable</button
			>
			<button
				disabled={!releaseState.prerelease}
				class="rounded-md px-3 py-1 font-medium transition-colors disabled:opacity-40 {channel ===
				'prerelease'
					? 'bg-[var(--color-surface-2)] text-[var(--color-ink)]'
					: 'text-[var(--color-muted)]'}"
				onclick={() => releaseState.prerelease && (channel = 'prerelease')}>Pre-release</button
			>
		</div>

		<div class="mt-4 flex-1 space-y-1">
			{#if !releaseState.loaded}
				{#each Array(4) as _}
					<div class="flex items-center gap-3 py-3">
						<div class="h-9 w-9 animate-pulse rounded-lg bg-[var(--color-surface-2)]"></div>
						<div class="flex-1">
							<div class="h-3.5 w-2/3 animate-pulse rounded bg-[var(--color-surface-2)]"></div>
						</div>
					</div>
				{/each}
			{:else if filtered.length === 0}
				<p class="py-8 text-center text-sm text-[var(--color-muted)]">
					No files match this filter{channel === 'prerelease' ? ' in the current pre-release' : ''}.
				</p>
			{:else}
				{#each filtered as a}
					<a
						href={a.url}
						class="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors duration-150 hover:border-[var(--color-line)] hover:bg-[var(--color-surface-2)]"
					>
						<span
							class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-soft)] transition-colors group-hover:border-[var(--color-brand-500)] group-hover:text-[var(--color-brand-300)]"
						>
							<Icon name={platIcon[a.meta.platform] || 'download'} size={16} />
						</span>
						<span class="min-w-0 flex-1">
							<span class="tnum block truncate text-sm text-[var(--color-ink)]">{a.name}</span>
							<span class="tnum text-xs text-[var(--color-muted)]">
								{formatBytes(a.size)} · {formatCount(a.downloads)} downloads
							</span>
						</span>
						<Icon
							name="arrowDown"
							size={16}
							class="shrink-0 text-[var(--color-muted)] transition-all duration-150 group-hover:translate-y-0.5 group-hover:text-[var(--color-brand-400)]"
						/>
					</a>
				{/each}
			{/if}
		</div>
	</div>
</div>
