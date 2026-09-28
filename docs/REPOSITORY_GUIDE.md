# Repository guide — v4.20

## What this repository provides

This is the Nuxt 4 starter/demo deployed at `https://v420.ecostudios.dev`. Its two pages demonstrate a name input, toast, persisted state, greeting, themes and basic SEO. The README also describes the separately distributed `v420` generator; this private app package has no CLI `bin` entry. Do not assume generator implementation lives here.

## Code map and routes

| Entry file | Responsibility |
| --- | --- |
| [app/pages/index.vue](../app/pages/index.vue) | `/`; `handleGoToAbout` checks the name and `openToast` navigates. |
| [app/pages/about.vue](../app/pages/about.vue) | `/about`; displays the stored name and `goBack` navigation. |
| [app/stores/index.ts](../app/stores/index.ts) | `useIndexStore`, VueUse localStorage and the client hydrate hook. |
| [app/app.vue](../app/app.vue) | `UApp`, toaster, page/layout outlet and shared document head. |
| [app/layouts/default.vue](../app/layouts/default.vue) | Page surface and slot wrapper. |
| [app/components/App/SwitchPrimaryColor.vue](../app/components/App/SwitchPrimaryColor.vue) | Primary/neutral palette controls and saved preferences. |
| [app/plugins/theme.ts](../app/plugins/theme.ts) | Theme initialization and server-injected early browser script. |
| [app/composables/useFaviconFromTheme.ts](../app/composables/useFaviconFromTheme.ts) | Mounted DOM/color observation and theme-derived favicon. |
| [app/composables/useSiteSeo.ts](../app/composables/useSiteSeo.ts) | Per-page canonical, social metadata and WebSite/WebPage/AboutPage JSON-LD. |
| [nuxt.config.ts](../nuxt.config.ts) | Nuxt UI, Pinia, Nuxt Image and global stylesheet setup. |

## State and rendering flow

A non-empty name in `index.vue` triggers a toast and navigation to `/about`. Both pages read `useIndexStore`; the name uses localStorage key `name`. The theme control and plugin use `nuxt-ui-primary` / `nuxt-ui-neutral`. These are browser-storage keys, not environment variables.

Nuxt renders the shell on the server and hydrates client state. Browser-only favicon/theme operations require their current lifecycle guards. No account, database, upload API or business-product workflow is implemented. A saved name is a local preference, not an authenticated profile. External avatar/image/font requests can still occur; this is not an offline guarantee.

## Commands and toolchain

Use [package.json](../package.json) with [bun.lock](../bun.lock). The pinned Nuxt 4.5.2 package requires Node `^22.19.0 || ^24.11.0 || >=26.0.0`; recheck that requirement if dependencies change. There is no checked-in GitHub Actions workflow or Vercel config, so provider-side settings require separate evidence.

| Command | Purpose |
| --- | --- |
| `bun install --frozen-lockfile` | Install the existing resolution; postinstall runs Nuxt prepare. |
| `bun run dev` | Development server. |
| `bun run build` | Production build. |
| `bun run preview` | Preview the existing build. |
| `bun run generate` | Static generation when appropriate for the deployment target. |
| `bun run nuxt typecheck` | Installed Nuxt CLI check using declared TypeScript/vue-tsc; not a package script. |

TypeScript is pinned to 6.0.3 alongside vue-tsc 3.3.11. The checker resolves `typescript/lib/tsc`; the previous TypeScript 7.0.2 package did not export that entry point. Keep compiler/checker changes coordinated and validate them; a newer compiler alone is not evidence of compatibility. No unit/E2E test suite, lint script or test script is checked in.

No app-specific environment variable or runtime credential is declared. The SEO origin is a literal in `useSiteSeo.ts`; do not invent a public-site environment override. For a docs-only edit, validate paths and commands statically. For relevant code changes, typecheck/build and verify both pages with browser-local state as needed.

## SEO and current limits

Only `/` and `/about` are public pages. [sitemap.xml](../public/sitemap.xml) lists both; [robots.txt](../public/robots.txt) advertises that sitemap. The SEO helper uses explicit paths, so query parameters and trailing-slash variants share the preferred canonical. JSON-LD is factual demo/site metadata; the publisher points to the studio's organization identity. Social cards are text-only because the earlier remote image was unavailable.

[llms.txt](../public/llms.txt) supplies optional factual context for compatible readers, with no indexing requirement or guarantee. There is no authenticated/private route, pricing, rating or product application schema. Local names and preferences must not enter schema or discovery files. If adapting this template to a new deployment, review the helper, sitemap and robots together. Source metadata does not prove live indexing or ranking.

## Example questions

1. “What happens when I press Enter with or without a name?” Start with `app/pages/index.vue::handleGoToAbout`, `openToast`, and `app/pages/about.vue`.
2. “Where are the name and selected palette saved?” Start with `app/stores/index.ts::useIndexStore`, `SwitchPrimaryColor.vue`, and `app/plugins/theme.ts`.
3. “Why is TypeScript 6 pinned?” Start with `package.json`, `bun.lock`, and the installed `vue-tsc` entry-point resolution; distinguish recorded compatibility from an untested upgrade.
4. “What must change when using another domain?” Start with `app/composables/useSiteSeo.ts`, `public/sitemap.xml`, and `public/robots.txt`; explain before changing anything.
