// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs'
import crypto from 'crypto'
import path from 'path'

// Función para calcular el hash SRI de un archivo
function calculateSRI(filePath: string): string {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const hash = crypto.createHash('sha384').update(fileContent, 'utf8').digest('base64')
    return `sha384-${hash}`
  } catch (error) {
    console.error(`Error al calcular SRI para ${filePath}:`, error)
    return ''
  }
}

// Construir la ruta absoluta al archivo util.js
const utilJsPath = path.resolve(__dirname, 'public', 'util.js')

// Calcular el hash SRI para util.js
const utilJsSRI = calculateSRI(utilJsPath)

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  // Agregar util.js en el head del documento HTML con defer para ejecutarse cuando el DOM esté cargado
  app: {
    head: {
      script: [
        { 
          src: '/util.js', 
          type: 'text/javascript', 
          defer: true,
          integrity: utilJsSRI,
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
