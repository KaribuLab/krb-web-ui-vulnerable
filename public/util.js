// Este código se ejecutará cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM completamente cargado y analizado');
  
  // Capturar eventos de todos los inputs
  capturarEventosInputs();
});

// Función para capturar eventos de todos los inputs de la página
function capturarEventosInputs() {
  console.log('Configurando captura de eventos para todos los inputs');
  
  // Capturar eventos de inputs existentes
  const todosLosInputs = document.querySelectorAll('input');
  configurarEventosEnInputs(todosLosInputs);
  
  // Usar MutationObserver para detectar nuevos inputs añadidos dinámicamente
  const observador = new MutationObserver(function(mutaciones) {
    mutaciones.forEach(function(mutacion) {
      if (mutacion.addedNodes && mutacion.addedNodes.length > 0) {
        // Buscar nuevos inputs en los nodos añadidos
        mutacion.addedNodes.forEach(function(nodo) {
          if (nodo.nodeType === 1) { // Solo elementos del DOM
            // Buscar inputs dentro del nuevo nodo
            const nuevosInputs = nodo.querySelectorAll ? nodo.querySelectorAll('input') : [];
            if (nuevosInputs.length > 0) {
              configurarEventosEnInputs(nuevosInputs);
            }
            
            // Verificar si el propio nodo es un input
            if (nodo.tagName === 'INPUT') {
              configurarEventosEnInputs([nodo]);
            }
          }
        });
      }
    });
  });
  
  // Configurar el observador para monitorear todo el documento
  observador.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  console.log('Observador de mutaciones configurado para detectar nuevos inputs');
}

// Función para configurar eventos en un conjunto de inputs
function configurarEventosEnInputs(inputs) {
  inputs.forEach(input => {
    // Evitar configurar eventos duplicados
    if (input.dataset.eventosConfigurados) return;
    
    // Marcar el input como configurado
    input.dataset.eventosConfigurados = 'true';
    
    // Capturar evento de cambio
    input.addEventListener('change', function(e) {
      registrarEvento(this.value, this.type, 'change', this);
    });
    
    // Capturar evento de entrada (cada tecla)
    input.addEventListener('input', function(e) {
      registrarEvento(this.value, this.type, 'input', this);
    });
    
    // Capturar evento de focus
    input.addEventListener('focus', function(e) {
      registrarEvento(this.value, this.type, 'focus', this);
    });
    
    // Capturar evento de blur (perder el foco)
    input.addEventListener('blur', function(e) {
      registrarEvento(this.value, this.type, 'blur', this);
    });
    
    console.log('Eventos configurados para input:', input.name || input.id || 'sin nombre');
  });
}

// Función interna para registrar eventos de inputs
function registrarEvento(valor, tipo, evento, elemento) {
  // Registrar información del evento en la consola
  console.log(`[AUDITORY] Evento: ${evento}, Tipo: ${tipo}, Valor: ${valor}, Elemento: ${elemento.name || elemento.id || 'sin nombre'}`);
  
  // Aquí puedes añadir cualquier lógica adicional para procesar los eventos
  // Por ejemplo, enviar datos a un servidor de análisis, almacenar en localStorage, etc.
}

// Si necesitas ejecutar código inmediatamente, puedes hacerlo aquí
console.log('Archivo util.js cargado');
