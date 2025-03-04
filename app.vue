<template>
  <div>
    <h1>Test</h1>
    <h2>My secret: {{ mySecretKey }}</h2>
    <h2>My base url: {{ baseUrl }}</h2>
    <div>
      <input type="password" name="password" id="password">
    </div>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const mySecretKey = ref<string>(appConfig.MY_SECRET_API_KEY as string)
const baseUrl = ref<string>(appConfig.BASE_URL as string)
console.log('Secret:', runtimeConfig.public.SECRET)
console.log('My secret is:', mySecretKey.value)
console.log('My base url is:', baseUrl.value)
</script>