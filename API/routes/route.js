// Importa la biblioteca Express para crear la aplicación web
const express = require("express");

// Importa el controlador de usuario desde el archivo '../assets/controllers/userController'
const userController = require("../assets/controllers/userController");
const templateController = require("../assets/controllers/templateController");

// Crea una instancia de Router de Express para definir rutas
const app = express.Router();

// Importa la biblioteca connect-multiparty para procesar datos multipart/form-data (subida de archivos)
const multiparty = require("connect-multiparty");

// Importa la biblioteca path para trabajar con rutas de archivos y directorios
const path = require("path");
const TemplateProxyManager = require("../../Patrones/Patron_Proxy/Principal/TemplateProxyManager");

// Define la ruta del directorio 'Public'
const ruta = path.join(__dirname, "../..", "Public");

// Crea una instancia de connect-multiparty para manejar la subida de archivos
const md = multiparty({});

// Define las rutas y sus respectivas funciones controladoras

// Ruta para obtener todos los usuarios
app.get("/usuarios", userController.getUsuario);
app.get("/verTemplates", templateController.getTemplate);

// Ruta para crear un nuevo usuario
app.post("/usuarios/crear", md, userController.createUsuario);

// Ruta para iniciar sesión de usuario
app.post("/usuarios/login", md, userController.loginUsuario);
app.post("/templates/crear", md, templateController.createTemplate);

// Ruta para consultar template por id o nombre
app.get("/buscarTemplate/", templateController.userIdTemplate);
app.get("/buscarTemplatePorId", templateController.templateIdTemplate);

// Ruta para enviar el archivo HTML de inicio de sesión
app.get("/login", (req, res) => {
  res.sendFile(path.join(ruta, "login.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(ruta, "login.html"));
});

// Ruta para enviar el archivo HTML de registro de usuario
app.get("/registro", (req, res) => {
  res.sendFile(path.join(ruta, "CrearCuenta.html"));
});

// Ruta para verificar la existencia de un nombre de usuario
app.post("/usuarios/nombre", md, userController.nombreUsuario);

app.get("/registroTemplate", (req, res) => {
  res.sendFile(path.join(ruta, "template.html"));
});

app.get("/registroTemplate", (req, res) => {
  res.sendFile(path.join(ruta, "template.html"));
});

app.get("/clienteTemplate", (req, res) => {
  res.sendFile(path.join(ruta, "template.html"));
});

app.get("/templates", (req, res) => {
  res.sendFile(path.join(ruta, "listaTemplates.html"));
});

app.post("/template/nombre", md, templateController.nombreTemplate);

// Ruta de ejemplo para enviar el archivo HTML de registro de usuario (repetida)
app.get("/cliente", (req, res) => {
  res.sendFile(path.join(ruta, "CrearCuenta.html"));
});

// Definir la ruta que manejará las solicitudes GET con parámetros
app.get("/proxy", async (req, res) => {
  try {
    const usuarioNombre = req.query.usuarioNombre;
    const usuarioPass = req.query.usarioPass;
    const usuarioId = req.query.usuarioId;
    const tempId = req.query.tempId;

    const Gestor = new TemplateProxyManager(
      usuarioNombre,
      usuarioPass,
      usuarioId
    );

    const resultado = await Gestor.accederTemplate(tempId);

    res.json(resultado);
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
// Exporta la aplicación Express para que esté disponible para otros archivos
module.exports = app;
