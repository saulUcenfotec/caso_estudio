// Importa el modelo de usuarios desde el archivo '../models/usuarios'
const user = require('../models/usuarios');

// Función para obtener todos los usuarios
function getUsuario(req, res) {
    // Busca todos los usuarios en la base de datos
    user.find().then(response => {
        // Envía una respuesta con estado 200 y los usuarios encontrados
        res.status(200).send({ response });
    }).catch(err => {
        // Si hay un error, envía una respuesta con estado 500 y el mensaje de error
        res.status(500).send({ response: err });
    });
}

// Función para crear un nuevo usuario
function createUsuario(req, res) {
    // Extrae los datos del usuario del cuerpo de la solicitud
    const payload = req.body;
    // Convierte el tipo de usuario de una cadena a un número según el tipo
    switch (payload.tipo) {
        case "CPlantilla":
            payload.tipo = 1;
            break;
        case "GPlantilla":
            payload.tipo = 2;
            break;
        case "GUsuario":
            payload.tipo = 3;
            break;
    }
    // Crea un nuevo usuario en la base de datos con los datos proporcionados
    user.create(payload).then(response => {
            // Envía una respuesta con estado 200 y el usuario creado
            res.status(200).send({ "usuario": response });
        })
        .catch(err => {
            // Si hay un error, envía una respuesta con estado 500 y el mensaje de error
            res.status(500).send({ response: err });
        });
}

// Función para iniciar sesión de usuario
async function loginUsuario(req, res) {
    const payload = req.body;
    try {
        // Busca un usuario en la base de datos con el nombre de usuario y contraseña proporcionados
        var usuario = await user.findOne({ nombre: req.body.nombre, contrasena: req.body.contrasena });
        // Si no se encuentra ningún usuario, envía una respuesta con estado 404
        if (usuario == null || usuario == "") {
            res.status(404).send("not found");
        } else {
            // Si se encuentra un usuario, envía una respuesta con estado 200 y el usuario encontrado
            res.status(200).send({ "usuario": usuario });
        }
    } catch (err) {
        // Si hay un error, lo registra en la consola y envía una respuesta con estado 404
        console.log(err.message);
        res.status(404).send("not found");
    }
}

// Función para verificar si un nombre de usuario ya existe
async function nombreUsuario(req, res) {
    try {
        // Busca un usuario en la base de datos con el nombre de usuario proporcionado
        var usuario = await user.findOne({ nombre: req.body.nombre });
        // Si no se encuentra ningún usuario, envía una respuesta vacía con estado 404
        if (usuario == null || usuario == "") {
            res.status(404).send("");
        } else {
            // Si se encuentra un usuario, envía una respuesta vacía con estado 200
            res.status(200).send("");
        }
    } catch (err) {
        // Si hay un error, lo registra en la consola y envía una respuesta con estado 404
        console.log(err.message);
        res.status(404).send("not found");
    }
}

// Exporta las funciones para que estén disponibles para otros archivos

module.exports = {
    getUsuario,
    createUsuario,
    loginUsuario,
    nombreUsuario
}