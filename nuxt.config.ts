// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ]
    },
  },
  css: ["~/assets/css/global.css", "~/assets/css/main.css"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  typescript: {
    typeCheck: true
  }
})
