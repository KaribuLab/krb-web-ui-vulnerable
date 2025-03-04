import type { Handler, HandlerEvent, HandlerContext, HandlerResponse } from "@netlify/functions";

// Interfaz para la respuesta personalizada
interface ApiResponse {
  message: string;
  route: string;
  timestamp: string;
  method: string;
  action?: string;
  receivedData?: any;
  bodyParseError?: string;
  path?: string;
  httpMethod?: string;
  headers?: any;
}

// Función de Netlify que responde a la ruta /api/user con diferentes métodos HTTP
const handler: Handler = async (event: HandlerEvent, context: HandlerContext): Promise<HandlerResponse> => {
  // Determinar si la solicitud viene de la ruta /api/user o directamente de la función
  const isApiUserRoute = event.path === "/api/user";
  
  // Obtener el método HTTP de la solicitud
  const method = event.httpMethod;
  
  // Respuesta según el método HTTP
  const response: ApiResponse = {
    message: isApiUserRoute 
      ? "¡Bienvenido a la API de usuario!" 
      : "¡Hola mundo desde la función TypeScript de Netlify!",
    route: isApiUserRoute ? "/api/user" : "/.netlify/functions/hola-mundo-ts",
    timestamp: new Date().toISOString(),
    method: method
  };
  
  // Personalizar la respuesta según el método HTTP
  switch (method) {
    case "GET":
      response.action = "Obteniendo información del usuario";
      break;
    case "POST":
      response.action = "Creando un nuevo usuario";
      // Procesar el cuerpo de la solicitud si existe
      if (event.body) {
        try {
          const bodyData = JSON.parse(event.body);
          response.receivedData = bodyData;
        } catch (error) {
          response.bodyParseError = "Error al procesar el cuerpo de la solicitud";
        }
      }
      break;
    case "PUT":
      response.action = "Actualizando información del usuario";
      // Procesar el cuerpo de la solicitud si existe
      if (event.body) {
        try {
          const bodyData = JSON.parse(event.body);
          response.receivedData = bodyData;
        } catch (error) {
          response.bodyParseError = "Error al procesar el cuerpo de la solicitud";
        }
      }
      break;
    case "DELETE":
      response.action = "Eliminando usuario";
      break;
    default:
      return {
        statusCode: 405,
        headers: {
          "Content-Type": "application/json",
          "Allow": "GET, POST, PUT, DELETE"
        },
        body: JSON.stringify({
          error: "Método no permitido",
          allowedMethods: ["GET", "POST", "PUT", "DELETE"]
        })
      };
  }
  
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...response,
      path: event.path,
      httpMethod: event.httpMethod,
      headers: event.headers
    })
  };
};

export { handler }; 