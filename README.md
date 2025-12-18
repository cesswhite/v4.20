![v4.20_cover_image](https://github.com/user-attachments/assets/db3b68fb-4677-4326-96b5-8a24e92a91a4)

# 🚀 v4.20: The Ultimate Nuxt 4 Starter Template

> Minimal, blazing fast, and designed with developers in mind. Your go-to starting point for modern web projects.

**🎯 Our Goal**: Keep your project starts **simple and direct**, always using the **latest from Nuxt**. No complexity, just clean code and modern tools to get you building faster.

**🔥 Perfect for any scale**: Whether you **scale your project** to enterprise level or **keep it simple** - it will always be perfect and production-ready.

## 🛠️ Built with cutting-edge technologies

- **[Nuxt 4](https://nuxt.com/)** - Powerful, streamlined development framework
- **[Nuxt UI](https://ui.nuxt.com/)** - Beautiful, customizable UI components
- **[Nuxt Image](https://image.nuxt.com/)** - Optimized images with built-in resizer and 20+ provider support
- **[Pinia](https://pinia.vuejs.org/ssr/nuxt.html#Nuxt)** - Simple and intuitive state management
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

✨ **Get started today and build faster, smarter, and better!**

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
# Clone the repository
git clone https://github.com/{username}/v420.git
cd v420

# Install dependencies
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
# Start development server
bun dev

# Your app will be running at http://localhost:3000
```

### 📦 Production Build

```sh
# Build for production
bun build

# Deploy the generated files to your hosting service
```

## 📁 Project Structure

```
app/
├── components/     # Vue components
├── layouts/        # Layout templates
├── pages/          # App routes
├── stores/         # Pinia stores
└── assets/css/     # Global styles
```

## 🎯 Key Components

- **🎨 Theme Switcher** - Dark/light mode toggle
- **🌈 Color Picker** - Primary color customization
- **📱 Responsive Layout** - Mobile-first design

## 🔧 Pinia SSR Configuration

This template includes a pre-configured Pinia store with **SSR hydration** support:

- **Hydration Strategy**: Ignores initial state and reads values from browser (localStorage)
- **SSR Compatibility**: Properly handles server-side rendering with client-side state
- **TypeScript Note**: Uses `@ts-expect-error` due to [Pinia type system limitation](https://github.com/vuejs/pinia/issues/2086#issuecomment-1493942501)

📚 **Learn more**: [Pinia SSR Documentation](https://pinia.vuejs.org/cookbook/composables.html#SSR)

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

MIT License - feel free to use this project however you'd like!
