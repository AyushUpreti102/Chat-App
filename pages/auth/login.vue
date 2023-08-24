<template>
  <div class="flex flex-col gap-4">
    <form @submit.prevent="loginSignUp">
      <input type="email" class="border" v-model="email" />
      <input type="password" class="border" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/stores/authStore";

const { login, signUp } = useAuthStore();
const email = ref("");
const password = ref("");
const loginSignUp = async () => {
  await login({
    email: email.value,
    password: password.value,
  });
};
</script>