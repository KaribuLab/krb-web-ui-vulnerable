#!/bin/bash

# Colores para mejor visualización
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# URLs a probar
ORIGINAL_URL="http://localhost:8888/.netlify/functions/hola-mundo-ts"
API_URL="http://localhost:8888/api/user"

# Datos para las pruebas
CREATE_DATA='{"nombre":"Juan","email":"juan@ejemplo.com"}'
UPDATE_DATA='{"id":1,"nombre":"Juan Actualizado","email":"juan@ejemplo.com"}'

# Función para ejecutar una solicitud y mostrar el resultado
function test_request() {
    local method=$1
    local url=$2
    local data=$3
    local description=$4

    echo -e "${YELLOW}=======================================================${NC}"
    echo -e "${GREEN}$description${NC}"
    echo -e "${BLUE}$method $url${NC}"
    
    if [ -n "$data" ]; then
        echo -e "${PURPLE}Datos: $data${NC}"
        response=$(curl -s -X $method -H "Content-Type: application/json" -d "$data" $url)
    else
        response=$(curl -s -X $method $url)
    fi
    
    echo -e "${CYAN}Respuesta:${NC}"
    echo $response | jq .
    echo ""
}

# Título
echo -e "${RED}=== PRUEBA DE FUNCIÓN NETLIFY CON MÉTODOS HTTP IMPLEMENTADOS ===${NC}"
echo ""

# Pruebas en la ruta original
echo -e "${YELLOW}=== PRUEBAS EN LA RUTA ORIGINAL ===${NC}"
test_request "GET" "$ORIGINAL_URL" "" "1. GET - Obtener información"
test_request "POST" "$ORIGINAL_URL" "$CREATE_DATA" "2. POST - Crear usuario"
test_request "PUT" "$ORIGINAL_URL" "$UPDATE_DATA" "3. PUT - Actualizar usuario"
test_request "DELETE" "$ORIGINAL_URL" "" "4. DELETE - Eliminar usuario"

# Pruebas en la ruta /api/user
echo -e "${YELLOW}=== PRUEBAS EN LA RUTA /api/user ===${NC}"
test_request "GET" "$API_URL" "" "1. GET - Obtener información"
test_request "POST" "$API_URL" "$CREATE_DATA" "2. POST - Crear usuario"
test_request "PUT" "$API_URL" "$UPDATE_DATA" "3. PUT - Actualizar usuario"
test_request "DELETE" "$API_URL" "" "4. DELETE - Eliminar usuario"

echo -e "${GREEN}Prueba completada exitosamente.${NC}" 