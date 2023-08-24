<template>
  <div class="h-full w-52 sm:w-72 border overflow-y-scroll">
    <div class="h-16 border-b flex items-center px-2" v-for="user in users" :key="user.name">
        {{ user.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const users = ref([{ name: 'test-1' }, { name: 'test-2' }, { name: 'test-3' }, { name: 'test-4' }, { name: 'test-5' }, { name: 'test-6' }, { name: 'test-7' }, { name: 'test-8' }, { name: 'test-9' }, { name: 'test-10' }, { name: 'test-11' }, { name: 'test-12' }, { name: 'test-13' }, { name: 'test-14' }])
</script>