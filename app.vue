<template>
  <div>
    <h1>Test</h1>
    <h2>My secret: {{ mySecretKey }}</h2>
  </div>
</template>

<script lang="ts" setup>
const mySecretKey = ref<string>('')
const runtimeConfig = useRuntimeConfig()
console.log('My secret is:', runtimeConfig.mySecretKey)
mySecretKey.value = runtimeConfig.mySecretKey as string
</script>