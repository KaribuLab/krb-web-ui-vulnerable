<template>
  <div>
    <h1>Test</h1>
    <h2>My secret: {{ mySecretKey }}</h2>
    <h2>My base url {{ baseUrl }}</h2>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const mySecretKey = ref<string>(runtimeConfig.public.NUXT_PUBLIC_MY_SECRET_API_KEY as string)
const baseUrl = ref<string>(runtimeConfig.public.NUXT_PUBLIC_BASE_URL as string)
console.log('My secret is:', mySecretKey.value)
console.log('My base url is:', baseUrl.value)
</script>