<template>
  <div>
    <h1>Test</h1>
    <h2>{{ mySecretKey }}</h2>
  </div>
</template>

<script lang="ts" setup>
const mySecretKey = ref<string>('')
const config = useRuntimeConfig()
console.log('My secret is:', config.mySecretKey)
mySecretKey.value = config.mySecretKey as string
</script>