<template>
  <div>
    <h1>Test</h1>
    <h2>My secret: {{ mySecretAPIKey }}</h2>
    <h2>My base url: {{ baseUrl }}</h2>
    <div>
      <input type="password" name="password" id="password" @input="handleInput">
    </div>
    <div v-if="showInput">
      <input type="text" name="text" id="text" v-model="inputValue">
      <h2>Hello {{ inputValue }}!</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const mySecretAPIKey = ref<string>(appConfig.MY_SECRET_API_KEY as string)
const showInput = ref<boolean>(false)
const baseUrl = ref<string>(appConfig.BASE_URL as string)
const inputValue = ref<string>('')
console.log('Secret:', runtimeConfig.public.SECRET)
console.log('My secret is:', mySecretAPIKey.value)
console.log('My base url is:', baseUrl.value)

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  showInput.value = input.value.length > 0
};
</script>