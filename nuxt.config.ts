// Load environment variables from multiple local .env files.
// For production, env vars should be set on the server (no .env file will be loaded).
if (process.env.NODE_ENV) {
  const { config } = await import("dotenv");

  // main ".env" gets auto loaded from nuxt
  config({ path: ".env.local", override: true });

  // NODE_ENV-specific .env files are intentionally not loaded here,
  // since relying on them is generally considered an anti-pattern:
  //     https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production
  // If you still want to enable them, refer to the following example:
  //     if (process.env.NODE_ENV === "development") {
  //       config({ path: ".env.dev", override: true });
  //       config({ path: ".env.local.dev", override: true });
  //     }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: [
    // official
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/test-utils",

    // community
    [
      "@nuxtjs/i18n",
      {
        defaultLocale: "en",
        locales: [
          // NOTE: Add locales here
          { code: "en", name: "English", file: "en.json" },
        ],
        strategy: "no_prefix",
      },
    ],
    "@pinia/nuxt",
  ],
});
