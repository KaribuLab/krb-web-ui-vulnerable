<template>
  <div>
    <h1>Test</h1>
    <h2>My base url: {{ baseUrl }}</h2>
    <div>
      <input type="password" name="password" id="password" @input="handleInput">
    </div>
    <div v-if="showInput">
      <input type="text" name="text" id="text" v-model="inputValue">
      <h2>Hello {{ inputValue }}!</h2>
      <button @click="invokeAPI">Invoke API</button>
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
if (runtimeConfig.public.MY_SECRET_API_KEY === undefined) {
  console.warn('MY_SECRET_API_KEY is not defined')
}

const invokeAPI = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users',{
    headers: {
      'Authorization': `Bearer ${mySecretAPIKey.value}`
    },
    method: 'POST',
    body: JSON.stringify({
      name: 'John Doe',
      email: 'john.doe@example.com'
    })
  })
  const data = await response.json()
  console.log(data)
}

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  showInput.value = input.value.length > 0
};
</script>