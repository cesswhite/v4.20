<template>
    <NuxtLayout name="default">
        <!-- Delete this and start building your app. Happy coding! -->
        <div class="h-dvh flex items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-1/2 xl:w-1/3">
                <div class="flex flex-col items-center justify-center gap-y-2">
                    <img src="https://picsum.photos/420/420" alt="Random Image from Picsum"
                        class="size-16 mx-auto rounded-full" loading="lazy" />
                    <span class="font-bold"> Hello, {{ name }}!</span>
                    <p class="font-normal text-base text-center text-dark-950/60 dark:text-dark-50/60">
                        v4.20 is a carefully crafted Nuxt starter template designed with a focus on minimalism,
                        performance, and developer experience.
                    </p>
                </div>
                <div class="flex items-center gap-x-1.5 justify-center text-dark-950 dark:text-dark-50 text-sm">
                    <span class="inline-block text-dark-950 dark:text-dark-50 w-auto">Developed with ❤️ by</span>
                    <UButton to="https://ecostudios.dev/" target="_blank" variant="link" color="primary"
                        class="underline p-0">
                        Eco Development Studios
                    </UButton>
                </div>
                <div class="flex flex-col items-center gap-y-4 w-full">
                    <UButton @click="$router.back()" variant="link" color="primary" icon="i-lucide-arrow-left"
                        class="cursor-pointer">
                        Back to Home
                    </UButton>
                </div>
            </div>
        </div>
        <!-- // -->
    </NuxtLayout>
</template>

<script setup lang="ts">
/* Delete this and start building your app. Happy coding! */
const { name } = storeToRefs(useIndexStore());
/* // */

useSeoMeta({
    title: "v4.20 | About",
    ogTitle: "v4.20 | About",
    description: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogDescription: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
    ogUrl: 'https://v420.ecostudios.dev/about',
    twitterImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
    twitterTitle: "v4.20 | About",
    twitterDescription: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogImageWidth: 1200,
    ogImageHeight: 630,
});
</script>