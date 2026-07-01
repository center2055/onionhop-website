<script>
	import Icon from '$lib/components/Icon.svelte';
	import { GITHUB_URL, COMPANY_URL, BLOG_URL, CONTACT_EMAIL } from '$lib/config.js';
</script>

<svelte:head>
	<title>About — OnionHop</title>
	<meta name="description" content="OnionHop is an open-source Tor routing client built by Rana GmbH in Leipzig, Germany." />
</svelte:head>

<section class="mx-auto max-w-3xl px-5 py-16 sm:px-6">
	<h1 class="text-4xl font-bold sm:text-5xl">About OnionHop</h1>
	<p class="mt-4 text-lg text-[var(--color-ink-soft)]">
		A free, open-source Tor routing client — built by a small company in Leipzig.
	</p>

	<div class="legal mt-10">
		<p>
			I'm Robert Rudolph, a developer based in Germany. Our company is
			<a href={COMPANY_URL} target="_blank" rel="noreferrer">Rana GmbH</a>. Alongside our
			open-source projects, we help clients with applications, websites and IT services.
		</p>
		<p>
			OnionHop started as a simple way to send traffic through Tor without wrestling with config
			files. It grew — carefully, and always cross-platform — into a full routing client: a
			lightweight proxy mode and a system-wide VPN mode, split tunneling, a bridge scanner with
			pluggable transports for censored networks, country and domain routing, a kill switch, DNS
			leak protection, and a matching command-line client. It has stayed open source and GPL-3.0 the
			whole way.
		</p>
		<p>
			OnionHop is an independent project. It is not affiliated with, sponsored by, or endorsed by
			The Tor Project; it simply builds on Tor to make private routing approachable on the desktop.
		</p>
		<p>
			If you'd like to get in touch, send a message to
			<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or visit our company website.
		</p>
	</div>

	<div class="mt-10 flex flex-wrap gap-3">
		<a href={`mailto:${CONTACT_EMAIL}`} class="btn btn-primary text-sm">
			<Icon name="arrowRight" size={16} /> Email us
		</a>
		<a href={COMPANY_URL} target="_blank" rel="noreferrer" class="btn btn-ghost text-sm">
			<Icon name="external" size={16} /> ranagmbh.de
		</a>
		<a href={BLOG_URL} target="_blank" rel="noreferrer" class="btn btn-ghost text-sm">
			<Icon name="external" size={16} /> Blog
		</a>
		<a href={GITHUB_URL} target="_blank" rel="noreferrer" class="btn btn-ghost text-sm">
			<Icon name="github" size={16} /> GitHub
		</a>
	</div>
</section>
