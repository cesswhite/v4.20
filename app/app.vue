<template>
  <NuxtLoadingIndicator />
  <UApp :toaster="toaster">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
// See documentation here: https://ui.nuxt.com/docs/components/toast#stacked-toasts
const toaster = { expand: false }

// See documentation here: https://x.com/Atinux/status/1912803617566081396
useFaviconFromTheme()

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/icon.svg'
    }
  ]
})
</script>
