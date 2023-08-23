import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/authStore'

export default defineNuxtRouteMiddleware((to) => {
    const { isLoggedIn } = storeToRefs(useAuthStore())

    if(!isLoggedIn.value && !to.path.includes('auth') || to.path == '/') {
        return navigateTo('/auth/login')
    }

    if(isLoggedIn.value && to.path.includes('auth') || to.path == '/') {
        return navigateTo('/ab')
    }
})