<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
console.log('My secret is:', config.mySecretKey)
</script>