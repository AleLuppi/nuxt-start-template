# Nuxt Starter Template

### A clean, opinionated Nuxt starter to kick off your next project faster.

This template is built on top of the bare Nuxt minimal starter, with the essentials already wired up so you can start building right away: it comes with useful modules, sensible defaults, and a ready-to-extend structure so you can focus on building your app instead of wiring up the basics.

The app itself is empty — you’re in charge of building it — but the structure is ready for you.

> Throughout the codebase, you’ll find `NOTE:` comments pointing to the parts you can easily customize.

---

## Features

This starter comes pre-configured with:

- Nuxt modules:

  - **[ESLint](https://eslint.org/)** – Linting rules for consistent, high-quality code.
  - **[I18n](https://i18n.nuxtjs.org/)** – Internationalization and localization support.
  - **[Nuxt Image](https://image.nuxt.com/)** – Optimized image handling for performance.
  - **[Nuxt UI](https://ui.nuxt.com/)** – Ready-made, composable UI components.
  - **[Nuxt Test Utils](https://nuxt.com/docs/getting-started/testing)** – Helpers to write tests quickly.
  - **[Pinia](https://pinia.vuejs.org/)** – Modern, intuitive state management.
  - **[VueUse](https://vueuse.org/)** – A rich collection of Vue composables to supercharge your development.

- Ready to use UI components:

  - **[UiHeader](./app/components/ui/header.vue)** – A header component with sticky and scroll-aware behavior.
  - **[UiHideOnIdle](./app/components/ui/hide-on-idle.vue)** – A Transition component that hides its content when the user is idle.

- Basic App template – Includes the essential structure every modern application needs.

- Environment variables setup – Simplified management of configuration and secrets.

- Latest stable packages – Always start from an up-to-date foundation.

> Explore [Nuxt documentation](https://nuxt.com/docs/) to see all the features offered by Nuxt framework.

## Getting Started

Install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

Start the development server on http://localhost:3000:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev
```

## Deploy for Production

### Build the application

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build
```

### Preview the production build locally

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview
```

### Start production server

```bash
# npm
npm run start

# pnpm
pnpm start

# yarn
yarn start
```

Or, directly:

```bash
node .output/server/index.mjs
```

> Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for details and suggestions.
