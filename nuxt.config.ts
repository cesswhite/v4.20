// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  devtools: { enabled: true },
  css: ["~/assets/css/global.css", "~/assets/css/main.css"],
  compatibilityDate: '2025-07-17'
})
