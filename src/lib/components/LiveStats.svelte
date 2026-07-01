<script>
	import { onMount } from 'svelte';
	import { releaseState, ensureReleases } from '$lib/stores/releases.svelte.js';
	import { formatCount } from '$lib/github.js';
	import { t } from '$lib/i18n/locale.svelte.js';

	onMount(ensureReleases);

	const stats = $derived([
		{ label: t('hero.latest'), value: releaseState.version || (releaseState.loaded ? '—' : '…') },
		{
			label: t('hero.downloads'),
			value: releaseState.downloads != null ? formatCount(releaseState.downloads) : releaseState.loaded ? '—' : '…'
		},
		{
			label: t('hero.stars'),
			value: releaseState.stars != null ? formatCount(releaseState.stars) : releaseState.loaded ? '—' : '…'
		}
	]);
</script>

<dl class="grid grid-cols-3 gap-3 sm:max-w-md">
	{#each stats as s}
		<div class="card px-4 py-3">
			<dt class="text-[0.72rem] font-medium uppercase tracking-wider text-[var(--color-muted)]">
				{s.label}
			</dt>
			<dd class="tnum mt-1 text-lg font-semibold text-[var(--color-ink)]">{s.value}</dd>
		</div>
	{/each}
</dl>
