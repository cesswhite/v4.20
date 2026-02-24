![v4.20_cover_image](https://github.com/user-attachments/assets/db3b68fb-4677-4326-96b5-8a24e92a91a4)

# v4.20: The real Nuxt 4 Starter

Minimal, opinionated Nuxt 4 starter for developers. Uses the latest Nuxt releases and stays production-ready whether you keep the project small or scale it.

## Tech Stack

- **[Nuxt 4](https://nuxt.com/)** – Full-stack Vue framework with SSR, file-based routing, and auto-imports
- **[Nuxt UI](https://ui.nuxt.com/)** – Accessible UI component library with Tailwind-based theming
- **[Nuxt Image](https://image.nuxt.com/)** – Image optimization with built-in resizer and multiple providers
- **[Pinia](https://pinia.vuejs.org/ssr/nuxt.html#Nuxt)** – Vue state store with SSR support
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS

## Features

- **Nuxt 4** – Current major with improved performance and DX
- **Pinia** – Centralized state with SSR hydration
- **Tailwind CSS** – Utility-first styling and design tokens
- **Nuxt Image** – Resizing, modern formats, and provider abstraction
- **Dark mode** – Theme toggle (light/dark)
- **Color themes** – Configurable primary palette
- **Responsive** – Mobile-first layout
- **SEO** – Meta tags and head configuration

## Quick Start

## Features

- **Nuxt 4** - Latest version with enhanced performance
- **Pinia** - Modern state management
- **Tailwind CSS** - Utility-first styling
- **Nuxt Image** - Optimized images with automatic resizing and modern format support
- **Dark mode** - Light/dark theme switching
- **Color themes** - Customizable primary colors
- **Responsive** - Mobile-first design
- **SEO ready** - Optimized meta tags

## Quick Start

### Prerequisites

- **Node.js** (≥ 18.x)
- **[Bun](https://bun.sh/)** (recommended) or npm/yarn
- **git** (required if you use the CLI generator)

### Installation

```sh
git clone https://github.com/{username}/v420.git
cd v420
bun i
```

## Create a new project from CLI

Run:

```sh
bunx v420
```

or

```sh
npx v420
```

The CLI will ask for a project name and theme colors, then create the project. Then `cd` into the folder and run `bun i && bun dev`.

## Comparison with `npm create nuxt@latest`

The official Nuxt CLI is excellent and we're fully inspired by it. v420 is an opinionated alternative that gets you from zero to a configured app in one command and two choices (project name + primary/neutral colors), with defaults that match real-world use so you can focus on building instead of wiring.

| Area            | What we do differently                                                                                                                                                                                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Colors**      | The Nuxt CLI lets you opt into Nuxt UI but does not let you pick **primary** and **neutral** palettes. Choosing them up front is essential: you avoid mid-project decisions and layout shifts when theme tokens aren’t set yet. We prompt for both and apply them before the first run. |
| **Modules**     | Nuxt’s module ecosystem is great; more modules aren’t always better. We ship only what you need to scale from day one: Nuxt UI, Nuxt Image and Pinia. You can add more when you need them.                                                                                              |
| **Layouts**     | Real apps (sites, dashboards, SaaS) rely on layouts. The official CLI doesn’t include a layout example. We do: a default layout with navigation and theme controls so you see how layouts work immediately.                                                                             |
| **Pages**       | The Nuxt CLI creates a `pages/` folder with a single file. We create two pages and a simple flow between them so the role of `pages/` and file-based routing is clear from the start.                                                                                                   |
| **Components**  | We keep components close to Nuxt conventions: folder-based organization (e.g. `App/`) so it’s obvious which pieces are app-wide, without relying on prefixes.                                                                                                                           |
| **Composables** | We include working composable examples so you see how they behave in a real app, including the [Nuxt UI doc example](https://ui.nuxt.com/) for dynamically updating the favicon from the theme color.                                                                                   |
| **Plugins**     | The official setup doesn’t show how to use plugins for client-side theme bootstrapping. We use a small plugin that applies primary and neutral colors **before** the app mounts, so there’s no flash or layout shift from default values loading late.                                  |
| **Stores**      | We ship a minimal Pinia store with **SSR hydration** and persistence via `useLocalStorage` from `@vueuse/core` (bundled with Nuxt UI), plus HMR-friendly setup so you have a clear pattern for global state.                                                                            |

On top of that you get: toast usage, `useHead` and SEO meta patterns, and a few more conventions documented in the repo. Again, the Nuxt CLI is fantastic; v420 is a more opinionated, ready-to-extend baseline so you can start coding a bit faster—one command, two choices, and the rest is yours.

### Development

```sh
bun dev
```

Dev server runs at `http://localhost:3000` with HMR.

### Production build

```sh
bun build
```

Output is in `.output`. Serve with `bun run preview` or deploy the generated files to your host.

## Project structure

```
app/
├── components/     # Vue components (auto-imported)
├── layouts/        # Layout wrappers
├── pages/          # File-based routes (Vue Router)
├── stores/         # Pinia stores
└── assets/css/     # Global styles
```

## Main components

- **Color Picker** – Primary color customization (theme token)
- **Logo** – Site logo used in layout/header
- **Layout** – Responsive shell with navigation and theme toggle

## Pinia SSR configuration

The template ships with a Pinia store set up for **SSR hydration**:

- **Hydration**: Initial state is not serialized; values are read on the client (e.g. from `localStorage`) after hydration.
- **SSR**: Safe for server-side rendering with client-only state.
- **TypeScript**: Uses `@ts-expect-error` where required due to [Pinia typing limitations](https://github.com/vuejs/pinia/issues/2086#issuecomment-1493942501).

See [Pinia SSR documentation](https://pinia.vuejs.org/cookbook/composables.html#SSR) for details.

## Default Cursor skills

This repo ships with [Cursor](https://cursor.com/) agent skills in `.cursor/skills/`. The AI uses them for Nuxt and UI work in this codebase.

| Skill       | Purpose                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **nuxt**    | Nuxt framework: SSR, auto-imports, file-based routing, server routes, `useFetch`, middleware, hybrid rendering. Use when editing config, routes, data fetching, or deployment. |
| **nuxt-ui** | [@nuxt/ui](https://ui.nuxt.com/) v4: 125+ accessible Vue components, Tailwind theming, forms, dashboards. Use when building or customizing UI, themes, or layouts.             |

Skills are loaded automatically when the project is opened in Cursor; no extra setup is required.

## Contributing

Issues and pull requests are welcome.

## License

MIT.
