const Usuario = require("./Auxiliares/Usuario");
const Validador = require("./Auxiliares/Validador");
const TemplateProxy = require("./Implementacion/TemplateProxy");

// Función de prueba para el acceso permitido al template
function testAccesoPermitido() {
  // Crear un usuario de prueba
  const usuario = new Usuario(1, "usuario1", "password123");
  // Crear un validador
  const validador = new Validador(1);
  // Crear una instancia de TemplateProxy para probar
  const templateProxy = new TemplateProxy(1);

  // Llamar al método acceder del proxy con credenciales válidas
  const resultado = templateProxy.acceder(1, "usuario1", "password123", 1);
  // Verificar que el resultado sea 'Tiene acceso al template.'
  if (resultado === "Tiene acceso al template.") {
    console.log("Prueba de acceso permitido al template: PASADA");
  } else {
    console.log("Prueba de acceso permitido al template: FALLIDA");
  }
}

// Función de prueba para el acceso denegado al template
function testAccesoDenegado() {
  // Crear un usuario de prueba
  const usuario = new Usuario(1, "usuario1", "password123");
  // Crear un validador
  const validador = new Validador(1);
  // Crear una instancia de TemplateProxy para probar
  const templateProxy = new TemplateProxy(1);

  // Llamar al método acceder del proxy con credenciales inválidas
  const resultado = templateProxy.acceder(2, "usuario2", "password456", 2);
  // Verificar que el resultado sea 'No hay acceso al template.'
  if (resultado === "No hay acceso al template.") {
    console.log("Prueba de acceso denegado al template: PASADA");
  } else {
    console.log("Prueba de acceso denegado al template: FALLIDA");
  }
}

// Ejecutar las pruebas
testAccesoPermitido();
testAccesoDenegado();
