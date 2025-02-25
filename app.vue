<template>
  <div>
    <h1>Test</h1>
    <h2>My secret: {{ mySecretKey }}</h2>
  </div>
</template>

<script lang="ts" setup>
const mySecretKey = ref<string>('')
const appConfig = useAppConfig()
console.log('My secret is:', appConfig.MY_SECRET_API_KEY)
mySecretKey.value = appConfig.MY_SECRET_API_KEY as string
</script>