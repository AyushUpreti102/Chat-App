<template>
    <div class="h-16 bg-yellow-300 flex items-center justify-between px-2 shadow-lg">
        <div class="font-medium text-white text-3xl">Chat App</div>
        <div class="relative" v-if="isLoggedIn">
            <div class="me-4 cursor-pointer" @click="showDropdown = !showDropdown">
                <font-awesome-icon icon="fa-solid fa-bars" size="xl"></font-awesome-icon>
            </div>
            <div class="absolute w-52 left-[-12rem] top-8 border bg-white flex flex-col [&_div]:flex [&_div]:justify-between [&_div]:items-center [&_div]:cursor-pointer [&_div]:border-b [&_div]:p-2" v-if="showDropdown">
                <div @click="signOut()">Logout <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket"></font-awesome-icon></div>
                <div>Friends <font-awesome-icon icon="fa-solid fa-user-group"></font-awesome-icon></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/authStore";

const { signOut } = useAuthStore()
const { isLoggedIn } = storeToRefs(useAuthStore())
const showDropdown = ref<boolean>(false)
</script>