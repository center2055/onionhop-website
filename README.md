# OnionHop website

Marketing site for [OnionHop](https://github.com/center2055/OnionHop) — a privacy-first desktop
client that routes traffic through Tor.

Built with **SvelteKit** + **Tailwind CSS v4**, prerendered to fully static files via
`@sveltejs/adapter-static`. Dark, violet-accented theme; live download stats and a dynamic release
browser pulled from the GitHub API in the browser (no server, no tracking).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # static output in ./build
npm run preview  # serve the production build locally
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which builds the site and publishes
`build/` to GitHub Pages. The build uses relative asset paths (`kit.paths.relative`), so the same
output works from a domain root or a project subpath.

- Using a custom domain? Add a `CNAME` file in `static/` (it will be copied into `build/`) and set
  the domain in the repository's Pages settings.

## Structure

```
src/
  app.css                 design tokens (colors, type, components, motion)
  lib/
    config.js             external URLs + repo constants
    github.js             GitHub release fetch + cache + asset classification
    stores/releases…      shared load-once release/stats state
    components/           Nav, Footer, Icon, RoutingMotif, LiveStats, Downloads, Lightbox
  routes/
    +page.svelte          home (hero, features, bridges, screenshots, downloads)
    about / privacy / imprint
    +error.svelte         404
static/                   GUI.png, cli.svg (terminal mockup), brand-logo.png, icons
```
