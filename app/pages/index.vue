<template>
    <NuxtLayout name="default">
        <!-- Delete this block and start building your app. Happy coding! -->
        <div class="h-dvh flex items-center justify-center px-4 md:px-0">
            <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-1/2 xl:w-1/3">
                <div class="size-12">
                    <AppLogo />
                </div>
                <h1 class="font-extrabold text-5xl text-dark-950 font-family-instrument italic dark:text-dark-50">
                    v4.20
                </h1>
                <p
                    class="font-normal text-base font-family-inter tracking-tighter text-center text-dark-950/60 dark:text-dark-50/60">
                    Opinionated Nuxt 4 Starter Template
                    <br>
                    Minimal, Fast, and Developer-Friendly
                </p>
                <div class="w-auto  flex items-center justify-center gap-2 h-10">
                    <UColorModeButton color="primary" variant="link" size="lg" class="cursor-pointer" />
                    <LazyAppSwitchPrimaryColor />
                </div>
                <div class="flex flex-col items-center gap-y-4 mx-auto w-full sm:w-1/2 xl:w-1/3">
                    <UInput v-model="name" label="Name" placeholder="Name" class="w-full" size="lg" variant="outline"
                        @keyup.enter="handleGoToAbout" />
                    <UButton block @click="handleGoToAbout" variant="solid" color="primary" size="lg"
                        class="cursor-pointer">
                        Enter
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
const toast = useToast();

function handleGoToAbout() {
    if (name.value) {
        openToast();
    } else {
        toast.add({
            title: 'Oops!',
            description: 'Please enter your name!',
            color: 'warning'
        })
    }
}

function openToast() {
    toast.add({
        title: 'Hey!',
        description: 'Hello! You just clicked the button!',
        color: 'success'
    })
    navigateTo('/about')
}
/* // */


/* SEO: Configure SEO Meta Tags with your own information */
useSeoMeta({
    title: "v4.20 | Opinionated Nuxt 4 Starter Template",
    ogTitle: "v4.20 | Opinionated Nuxt 4 Starter Template",
    description: "Opinionated Nuxt 4 Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogDescription: "Opinionated Nuxt 4 Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
    twitterCard: "summary_large_image",
    ogUrl: 'https://v420.ecostudios.dev/',
    twitterImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
    twitterTitle: "v4.20 | Opinionated Nuxt 4 Starter Template",
    twitterDescription: "Opinionated Nuxt 4 Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogImageWidth: 1200,
    ogImageHeight: 630,
});
</script>