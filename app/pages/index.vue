<template>
    <NuxtLayout name="default">
        <!-- Delete this and start building your app. Happy coding! -->
        <div class="h-dvh flex items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-1/3">
                <div class="size-12">
                    <AppLogo />
                </div>
                <h1 class="font-extrabold text-5xl text-dark-950 font-family-instrument italic dark:text-dark-50">
                    v4.20
                </h1>
                <p
                    class="font-normal text-base font-family-inter tracking-tighter text-center text-dark-950/60 dark:text-dark-50/60">
                    Opinionated Starter Template
                    <br>
                    Minimal, Fast, and Developer-Friendly
                </p>
                <div class="w-full flex items-center justify-center gap-2">
                    <LazyAppSwitchMode />
                    <LazyAppSwitchPrimaryColor />
                </div>
                <div class="flex flex-col items-center gap-y-4 w-full md:w-1/2">
                    <UInput v-model="name" label="Name" placeholder="Name" class="w-full" size="lg" variant="outline"
                        @keyup.enter="handleEnter" />
                    <UButton block @click="openToast" variant="solid" color="primary" size="lg" class="cursor-pointer">
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
</script>