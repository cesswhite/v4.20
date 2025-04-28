<template>
    <NuxtLayout name="default">
        <!-- Delete this and start building your app. Happy coding! -->
        <div class="h-dvh flex items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-1/3">
                <div class="size-12">
                    <AppLogo />
                </div>
                <h1 class="font-extrabold text-5xl text-dark-900 font-family-instrument italic dark:text-dark-50">
                    v4.20
                </h1>
                <p class="font-normal text-base text-center text-dark-900/60 dark:text-dark-50/60">
                    Opinionated Starter Template
                    <br>
                    Minimal, Fast, and Developer-Friendly
                </p>
                <div class="w-full flex items-center justify-center gap-2">
                    <AppSwitchMode />
                    <AppSwitchPrimaryColor />
                </div>
                <div class="flex flex-col items-center gap-y-4 w-full">
                    <UInput v-model="name" label="Name" placeholder="Name" @keyup.enter="handleEnter" />
                    <UButton @click="openToast" variant="solid" color="primary">
                        Enter
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
const toast = useToast();

function handleEnter() {
    if (name.value.trim()) {
        openToast();
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

useSeoMeta({
    title: "v4.20 | Your Project Title",
    ogTitle: "v4.20 | Your Project Title",
    description: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogDescription: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    ogUrl: 'https://www.yourproject.com/',
    twitterImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "v4.20 | Your Project Title",
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