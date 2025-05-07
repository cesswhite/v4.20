<template>
    <NuxtLayout name="default">
        <!-- Delete this and start building your app. Happy coding! -->
        <div class="h-dvh flex items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-1/3">
                <div class="size-12">
                    <AppLogo />
                </div>
                <h1 class="font-extrabold text-5xl text-dark-950 font-family-instrument italic dark:text-dark-50">
                    About
                </h1>
                <p class="font-normal text-base text-center text-dark-950/60 dark:text-dark-50/60">
                    Hey! <span class="font-bold italic">{{ name }}</span>
                    <br>
                    <br>
                    v4.20 is a carefully crafted Nuxt starter template designed with a focus on minimalism,
                    performance, and developer experience.
                </p>
                <div
                    class="flex items-center justify-center gap-x-2 text-dark-950/40 hover:text-dark-950/70 dark:text-dark-50/40 dark:hover:text-dark-50/70 text-sm">
                    <span class="inline-block">Developed with ❤️ by</span>
                    <ULink href="https://ecostudios.dev/" target="_blank" color="primary" class="underline">
                        Eco Development Studios
                    </ULink>
                </div>
                <div class="flex flex-col items-center gap-y-4 w-full">
                    <UButton @click="$router.back()" variant="solid" color="primary" icon="i-lucide-arrow-left"
                        size="lg" class="cursor-pointer">
                        Back to Home
                    </UButton>
                </div>
            </div>
        </div>
        <!-- // -->
    </NuxtLayout>
</template>

<script setup>
/* Delete this and start building your app. Happy coding! */
const { name } = storeToRefs(useIndexStore());
/* // */

useSeoMeta({
    title: "v4.20 | About",
    ogTitle: "v4.20 | About",
    description: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogDescription: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
    twitterCard: "summary_large_image",
    ogUrl: 'https://v420.ecostudios.dev/about',
    twitterImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
    twitterCard: "summary_large_image",
    twitterTitle: "v4.20 | About",
    twitterDescription: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
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