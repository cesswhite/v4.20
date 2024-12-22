<template>
    <NuxtLayout name="default">
        <!-- Delete this and start building your app. Happy coding! -->
        <div class="h-dvh flex items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-1/3">
                <div class="size-12">
                    <AppLogo />
                </div>
                <h1 class="font-extrabold text-5xl text-dark-900 font-family-instrument italic dark:text-dark-50">
                    About
                </h1>
                <p class="font-normal text-base text-center text-dark-900/60 dark:text-dark-50/60">
                    Hey <span class="font-bold italic">{{ name }}</span>
                    <br>
                    <br>
                    v4.20 is an opinionated starter template that is minimal, fast, and developer-friendly created by
                    <ULink href="https://ecostudios.dev/" target="_blank" color="primary"
                        class="underline text-dark-950/80 dark:text-dark-50/80">
                        Eco Development Studios
                    </ULink>
                </p>
                <div class="flex flex-col items-center gap-y-4 w-full">
                    <UButton @click="$router.back()" variant="solid" color="primary" icon="i-lucide-arrow-left">
                        Back
                    </UButton>
                </div>
            </div>
        </div>
        <!-- // -->
    </NuxtLayout>
</template>

<script setup>
/* Delete this and start building your app. Happy coding! */
import { useIndexStore } from '~/stores';
const { name } = storeToRefs(useIndexStore());
/* // */

useSeoMeta({
    title: "v4.20 | Your About Title",
    ogTitle: "v4.20 | Your About Title",
    description: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogDescription: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    ogUrl: 'https://www.yourproject.com/',
    twitterImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "v4.20 | Your About Title",
    twitterDescription: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogImageWidth: 1200,
    ogImageHeight: 630,
});

useHead({
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