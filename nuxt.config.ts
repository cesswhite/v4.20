// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  devtools: { enabled: true },
  css: ["~/assets/css/global.css", "~/assets/css/main.css"],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-07',
  typescript: {
    typeCheck: true
  }
})
