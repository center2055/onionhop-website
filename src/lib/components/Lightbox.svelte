<script>
	import Icon from './Icon.svelte';
	let { src = $bindable(null), alt = '' } = $props();

	function close() {
		src = null;
	}
	function onKey(e) {
		if (e.key === 'Escape') close();
	}
</script>

<svelte:window on:keydown={onKey} />

{#if src}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
		role="button"
		tabindex="-1"
		onclick={close}
		onkeydown={() => {}}
	>
		<button
			class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
			aria-label="Close"
			onclick={close}
		>
			<Icon name="close" size={20} />
		</button>
		<img
			{src}
			{alt}
			class="max-h-[90vh] max-w-6xl rounded-xl border border-white/10 shadow-2xl"
		/>
	</div>
{/if}
