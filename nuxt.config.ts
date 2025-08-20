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
