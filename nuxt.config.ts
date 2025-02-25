console.log('process.env.MY_SECRET_API_KEY', process.env.MY_SECRET_API_KEY)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  runtimeConfig: {
    mySecretKey: process.env.MY_SECRET_API_KEY,
  },
})
