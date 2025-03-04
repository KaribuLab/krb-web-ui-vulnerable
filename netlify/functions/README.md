# Funciones de Netlify

Este directorio contiene funciones serverless para Netlify.

## Funciones disponibles

### Hola Mundo (TypeScript)

- **Archivo**: `hola-mundo-ts.ts`
- **Endpoint**: `/.netlify/functions/hola-mundo-ts`
- **Descripción**: Una función TypeScript que retorna un mensaje "Hola mundo" junto con información adicional sobre la solicitud.
- **Respuesta**: 
  ```json
  {
    "message": "¡Hola mundo desde la función TypeScript de Netlify!",
    "timestamp": "2023-06-01T12:34:56.789Z",
    "path": "/path/to/function",
    "httpMethod": "GET",
    "headers": { ... }
  }
  ```

## Desarrollo local

Para probar esta función localmente:

1. Instala las dependencias: `npm install`
2. Inicia el servidor de desarrollo: `npm run netlify-dev`
3. Accede a la función en tu navegador:
   - http://localhost:8888/.netlify/functions/hola-mundo-ts

## Despliegue

La función se despliega automáticamente cuando se hace push al repositorio. La configuración de despliegue se encuentra en el archivo `netlify.toml` en la raíz del proyecto. 