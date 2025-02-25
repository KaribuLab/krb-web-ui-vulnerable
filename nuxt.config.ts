console.log('process.env.MY_SECRET_API_KEY', process.env.MY_SECRET_API_KEY)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  runtimeConfig: {
    public: {
      mySecretKey: process.env.MY_SECRET_API_KEY,
    }
  },
  // Agregar util.js en el head del documento HTML con defer para ejecutarse cuando el DOM esté cargado
  app: {
    head: {
      script: [
        { src: '/obfuscated.js', type: 'text/javascript', defer: true }
      ]
    }
  }
})
