![v4.20_cover_image](https://github.com/user-attachments/assets/db3b68fb-4677-4326-96b5-8a24e92a91a4)

# v4.20: The real Nuxt 4 Starter

Minimal, fast Nuxt 4 boilerplate aimed at developers. Uses the latest Nuxt releases and stays production-ready whether you keep the project small or scale it.

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

## ✨ Features

- 🎯 **Nuxt 4** - Latest version with enhanced performance
- 🗄️ **Pinia** - Modern state management
- 🎨 **Tailwind CSS** - Utility-first styling
- 🖼️ **Nuxt Image** - Optimized images with automatic resizing and modern format support
- 🌙 **Dark mode** - Light/dark theme switching
- 🎨 **Color themes** - Customizable primary colors
- 📱 **Responsive** - Mobile-first design
- 🔍 **SEO ready** - Optimized meta tags

## 🚀 Quick Start

### 📋 Prerequisites

- **Node.js** (≥ 18.x)
- **[Bun](https://bun.sh/)** (recommended) or npm/yarn
- **git** (required if you use the CLI generator)

### ⚡ Installation

```sh
git clone https://github.com/{username}/v420.git
cd v420
bun i
```

## 🧰 CLI (project generator)

This repo ships a `v420` CLI that **clones the template repo** into a new folder and then updates your theme colors.

### Usage

```sh
v420 my-app
```

Optional:

```sh
v420 my-app --repo https://github.com/cesswhite/v420.git --branch main
v420 my-app --keep-git
```

Environment overrides:

```sh
V420_TEMPLATE_REPO=https://github.com/cesswhite/v420.git V420_TEMPLATE_BRANCH=main v420 my-app
```

### 🛠️ Development

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

| Skill | Purpose |
|-------|---------|
| **nuxt** | Nuxt framework: SSR, auto-imports, file-based routing, server routes, `useFetch`, middleware, hybrid rendering. Use when editing config, routes, data fetching, or deployment. |
| **nuxt-ui** | [@nuxt/ui](https://ui.nuxt.com/) v4: 125+ accessible Vue components, Tailwind theming, forms, dashboards. Use when building or customizing UI, themes, or layouts. |

Skills are loaded automatically when the project is opened in Cursor; no extra setup is required.

## Contributing

Issues and pull requests are welcome.

## License

MIT.
