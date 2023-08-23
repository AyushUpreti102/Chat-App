<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/stores/authStore'
const { isLoggedIn } = useAuthStore()
</script>