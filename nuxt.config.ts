// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  runtimeConfig: {
    public: {
      ...Object.entries(process.env).reduce((acc: Record<string, string | undefined>, [key, value]) => {
        // Si la clave comienza con NUXT_PUBLIC_, eliminar ese prefijo
        if (key.startsWith('NUXT_PUBLIC_')) {
          acc[key.replace('NUXT_PUBLIC_', '')] = value;
        } else {
          acc[key] = value;
        }
        return acc;
      }, {})
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
