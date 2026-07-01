<script>
	import Icon from './Icon.svelte';
	import { LOCALES } from '$lib/i18n/messages.js';
	import { localeState, setLocale } from '$lib/i18n/locale.svelte.js';

	let open = $state(false);
	let root;

	const current = $derived(LOCALES.find((l) => l.code === localeState.code) ?? LOCALES[0]);

	function choose(code) {
		setLocale(code);
		open = false;
	}

	function onWindowClick(e) {
		if (open && root && !root.contains(e.target)) open = false;
	}
</script>

<svelte:window onclick={onWindowClick} />

<div class="relative" bind:this={root}>
	<button
		type="button"
		class="inline-flex h-10 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-2.5 text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
		aria-label="Change language"
		aria-haspopup="listbox"
		aria-expanded={open}
		onclick={() => (open = !open)}
	>
		<Icon name="globe" size={16} stroke={1.8} />
		<span class="max-[380px]:hidden">{current.name}</span>
		<Icon name="chevron" size={14} stroke={2} class="opacity-60" />
	</button>

	{#if open}
		<ul
			class="absolute end-0 z-50 mt-2 max-h-[70vh] w-44 overflow-auto rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-1 shadow-[var(--shadow-float)]"
			role="listbox"
			aria-label="Language"
		>
			{#each LOCALES as l}
				<li>
					<button
						type="button"
						role="option"
						aria-selected={l.code === localeState.code}
						class="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-start text-sm transition-colors {l.code ===
						localeState.code
							? 'bg-[var(--color-surface-2)] text-[var(--color-ink)]'
							: 'text-[var(--color-ink-soft)] hover:bg-white/5'}"
						onclick={() => choose(l.code)}
					>
						{l.name}
						{#if l.code === localeState.code}
							<Icon name="check" size={15} class="text-[var(--color-brand-400)]" />
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
