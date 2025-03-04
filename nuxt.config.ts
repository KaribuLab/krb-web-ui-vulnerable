// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  runtimeConfig: {
    public: {
      SECRET: process.env.NUXT_PUBLIC_SECRET
    }
  },
  // Agregar util.js en el head del documento HTML con defer para ejecutarse cuando el DOM esté cargado
  app: {
    head: {
      script: [
        { src: '/util.js', type: 'text/javascript', defer: true }
      ]
    }
  }
})
