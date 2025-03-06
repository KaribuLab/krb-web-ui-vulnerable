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
      <button @click="createUser">Create User</button>
      <button @click="getUser">Get User</button>
      <h2 v-if="userId > 0">User ID: {{ userId }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const showInput = ref<boolean>(false)
const baseUrl = ref<string>(appConfig.BASE_URL as string)
const inputValue = ref<string>('')
const userId = ref<number>(0)
if (runtimeConfig.public.MY_SECRET_API_KEY === undefined) {
  console.warn('MY_SECRET_API_KEY is not defined')
}

const createUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users',{
    headers: {
      'Authorization': `Bearer ${runtimeConfig.public.MY_SECRET_API_KEY}`
    },
    method: 'POST',
    body: JSON.stringify({
      name: 'John Doe',
      email: 'john.doe@example.com'
    })
  })
  if (!response.ok) {
    console.error('Error creating user:', response.statusText)
    return
  }
  const data = await response.json()
  userId.value = data.id
  console.log('createUser',data)
}

const getUser = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`,{
    method: 'POST',
    headers: {
      'X-Read-Token': runtimeConfig.public.MY_READ_TOKEN as string,
      'Authorization': `Bearer ${runtimeConfig.public.MY_SECRET_API_KEY}`
    }
  })
  if (!response.ok) {
    console.error('Error fetching user:', response.statusText)
    return
  }
  const data = await response.json()
  console.log('getUser',data)
}

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  showInput.value = input.value.length > 0
};
</script>