<template>
  <div>
    <h1>Test</h1>
    <h2>My secret: {{ mySecretKey }}</h2>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const mySecretKey = ref<string>('')
console.log('My secret is:', runtimeConfig.public.NUXT_PUBLIC_MY_SECRET_API_KEY)
mySecretKey.value = (runtimeConfig.public.NUXT_PUBLIC_MY_SECRET_API_KEY) as string
</script>