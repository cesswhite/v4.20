<template>
    <NuxtLayout name="default">
        <!-- Delete this block and start building your app. Happy coding! -->
        <div class="h-dvh flex items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-1/2 xl:w-1/3">
                <div class="flex flex-col items-center justify-center gap-y-2">
                    <NuxtImg src="https://avatars.githubusercontent.com/u/73481529?s=200&v=4"
                        alt="Eco Development Studios Profile Picture" class="size-16 mx-auto rounded-full" width="64"
                        height="64" :placeholder="[64, 64, 100, 10]" />
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
                    <UButton @click="goBack" variant="link" color="primary" icon="i-lucide-arrow-left"
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
/* Delete this block and start building your app. Happy coding! */
const { name } = storeToRefs(useIndexStore());

function goBack() {
    navigateTo('/')
}
/* // */

useSiteSeo({
    path: '/about',
    title: 'v4.20 | About',
    description: 'About v4.20, a Nuxt starter template focused on minimalism, performance, and developer experience by Eco Development Studios.',
})
</script>