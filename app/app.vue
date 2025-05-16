<template>
  <NuxtLoadingIndicator />
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
//See reference here: https://x.com/Atinux/status/1912803617566081396
useFaviconFromTheme()

useSeoMeta({
  title: "v4.20 | Opinionated Nuxt Starter Template",
  ogTitle: "v4.20 | Opinionated Nuxt Starter Template",
  description: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
  ogDescription: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
  ogImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
  twitterCard: "summary_large_image",
  ogUrl: 'https://v420.ecostudios.dev/',
  twitterImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
  twitterTitle: "v4.20 | Opinionated Nuxt Starter Template",
  twitterDescription: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
  ogImageWidth: 1200,
  ogImageHeight: 630,
});

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
      href: '/favicon.svg'
    }
  ]
})
</script>
