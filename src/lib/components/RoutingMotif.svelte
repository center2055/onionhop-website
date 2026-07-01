<script>
	// An abstract Tor routing path: your device → three relays → the open web,
	// with packets dashing along the encrypted hops and the relays gently pulsing.
	let { class: klass = '' } = $props();

	// x,y for: you, guard, middle, exit, web
	const nodes = [
		{ x: 40, y: 150, r: 9, kind: 'you' },
		{ x: 150, y: 78, r: 7, kind: 'relay' },
		{ x: 250, y: 200, r: 7, kind: 'relay' },
		{ x: 350, y: 92, r: 7, kind: 'relay' },
		{ x: 452, y: 150, r: 9, kind: 'web' }
	];
	const edges = [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4]
	];
</script>

<svg class={klass} viewBox="0 0 492 300" fill="none" aria-hidden="true">
	<defs>
		<linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
			<stop offset="0" stop-color="#7c3aed" />
			<stop offset="1" stop-color="#22d3ee" />
		</linearGradient>
	</defs>

	<!-- static base edges -->
	{#each edges as [a, b]}
		<line
			x1={nodes[a].x}
			y1={nodes[a].y}
			x2={nodes[b].x}
			y2={nodes[b].y}
			stroke="url(#edgeGrad)"
			stroke-width="1.6"
			stroke-opacity="0.28"
		/>
	{/each}

	<!-- packets dashing along each hop -->
	{#each edges as [a, b], i}
		<line
			x1={nodes[a].x}
			y1={nodes[a].y}
			x2={nodes[b].x}
			y2={nodes[b].y}
			stroke="url(#edgeGrad)"
			stroke-width="2.4"
			stroke-linecap="round"
			stroke-dasharray="4 46"
			style="animation: dash {2.6 + i * 0.25}s linear infinite; animation-delay: {i * 0.4}s"
		/>
	{/each}

	<!-- nodes -->
	{#each nodes as n, i}
		<g style="transform-box: fill-box; transform-origin: center; animation: pulse-node {3.4 + (i % 3) * 0.5}s ease-in-out infinite; animation-delay: {i * 0.3}s">
			<circle
				cx={n.x}
				cy={n.y}
				r={n.r}
				fill={n.kind === 'you' ? '#a78bfa' : n.kind === 'web' ? '#22d3ee' : '#15181e'}
				stroke={n.kind === 'relay' ? '#a78bfa' : 'none'}
				stroke-width="2"
			/>
			{#if n.kind === 'relay'}
				<circle cx={n.x} cy={n.y} r="2.4" fill="#a78bfa" />
			{/if}
		</g>
	{/each}
</svg>
