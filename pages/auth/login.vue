<template>
  <div class="p-2 h-[calc(100vh_-_4rem)] flex justify-center items-center">
    <form @submit.prevent="loginSignUp" class="w-full sm:w-[512px] border p-4 bg-white shadow-lg">
      <div class="mb-2">
        <label for="email" class="block">Email</label>
        <input id="email" type="email" placeholder="username@gmail.com" class="border h-8 w-full p-2" v-model="email" />
      </div>
      <div class="mb-2">
        <label for="password" class="block">Password</label>
        <input id="password" type="password" placeholder="your password" class="border h-8 w-full p-2" v-model="password" />
      </div>
      <button type="submit" class="bg-yellow-300 p-2 text-white w-full">
        {{ accountExist ? "Login" : "Signup" }}
        <font-awesome-icon icon="fa-solid fa-right-to-bracket"></font-awesome-icon>
      </button>
      <div class="text-center underline text-sky-400 mt-4">
        <span class="cursor-pointer" @click="accountExist = !accountExist">
          {{ accountExist ? "Don't have an account sign up now" : "Already have a account login now" }}
        </span>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/stores/authStore";

const { login, signUp } = useAuthStore();
const email = ref<string>("");
const password = ref<string>("");
const accountExist = ref<boolean>(true)
const loginSignUp = async () => {
  const payload = {
    email: email.value,
    password: password.value,
  }
  accountExist.value ? await login(payload) : await signUp(payload)
};
</script>