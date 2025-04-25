![v4.20_cover_image](https://github.com/user-attachments/assets/751532fb-b27e-4009-a79a-553a623d9196)

# v4.20: The Ultimate Opinionated Nuxt 3 Starter Template

Minimal, blazing fast, and designed with developers in mind, v4.20 is your go-to starting point for modern web projects.

## Built on cutting-edge technologies:

- Nuxt 3 for powerful, streamlined development.
- Nuxt UI v3 for customizable and sleek UI components.
- Pinia for state management simplicity.
- Tailwind CSS v4 for responsive and modern design.
- Fully compatible with the Nuxt v4 folder structure, this template ensures you're ready for the future of web development.

Get started today with v4.20 and build faster, smarter, and better!

## Features

- Nuxt 3
- Pinia for state management
- Tailwind CSS for styling
- Dark mode support
- Primary color switcher
- SEO meta tags
- Responsive design

## Project Setup

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/{username}/v420.git
    cd v420
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Development

Start the development server:

```sh
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Build

To build the project for production:

```sh
npm run build
# or
yarn build
```

### Deployment

After building the project, you can deploy the `dist` directory to your preferred hosting service.

## Project Structure

- `nuxt.config.ts`: Nuxt configuration file.
- `app/`: Contains the main application files.
  - `components/`: Vue components.
  - `layouts/`: Layout components.
  - `pages/`: Page components.
  - `stores/`: Pinia stores.
  - `assets/css/`: CSS files.
- `public/`: Static assets.

## Usage

### State Management

This project uses Pinia for state management. Example store:

```typescript
export const useIndexStore = defineStore('useIndexStore', {
    state: () => ({
        name: ''
    }),
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useIndexStore, import.meta.hot))
}
```

### Components

- `AppLogo`: Displays the application logo.
- `AppSwitchMode`: Toggles between dark and light mode.
- `AppSwitchPrimaryColor`: Switches the primary color theme.

### Pages

- `index.vue`: The main landing page.
- `about.vue`: The about page.

### Layouts

- `default.vue`: The default layout for the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
