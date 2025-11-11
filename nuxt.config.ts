// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/image'],
  image:{
    format: ['webp']
  },
  devtools: { enabled: true },
  css: ["~/assets/css/global.css", "~/assets/css/main.css"],
  compatibilityDate: '2025-11-11'
})