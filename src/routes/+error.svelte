<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import RoutingMotif from '$lib/components/RoutingMotif.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<svelte:head><title>{page.status} — OnionHop</title></svelte:head>

<section class="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:px-6">
	<RoutingMotif class="w-64 opacity-40" />
	<h1 class="mt-6 text-5xl font-bold">{page.status}</h1>
	<p class="mt-3 text-lg text-[var(--color-ink-soft)]">
		{page.error?.message || 'This route dropped somewhere between the relays.'}
	</p>
	<a href="{base}/" class="btn btn-primary mt-8 text-sm">
		<Icon name="arrowRight" size={16} /> Back home
	</a>
</section>
