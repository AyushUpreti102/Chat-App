<template>
    <ClientOnly>
        <div class="h-screen">
            <nav-bar />
            <div class="flex h-[calc(100vh_-_4rem)]">
                <div v-if="isLoggedIn">
                    <side-bar/>
                </div>
                <div class="w-full overflow-y-scroll">
                    <NuxtPage />
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/authStore";

const { isLoggedIn } = storeToRefs(useAuthStore())
</script>