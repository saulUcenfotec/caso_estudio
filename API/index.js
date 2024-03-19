// Importa la biblioteca Express para crear la aplicación web
const express = require('express');

// Importa la biblioteca Mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

// Importa la biblioteca path para trabajar con rutas de archivos y directorios
const path = require('path');

// Importa la biblioteca CORS para permitir solicitudes de diferentes orígenes
const cors = require('cors');

// URI de conexión a la base de datos MongoDB Atlas
const uri = "mongodb+srv://saul-rojas-898:1233456@caso.rt3unup.mongodb.net/?retryWrites=true&w=majority&appName=caso";

// Crea una instancia de la aplicación Express
const app = express();

// Define la ruta del directorio 'Public'
const ruta = path.join(__dirname, '..', 'Public');

// Habilita el middleware CORS para permitir solicitudes de diferentes orígenes
app.use(cors());

// Configura la aplicación para servir archivos estáticos desde el directorio 'Public'
app.use(express.static(ruta));

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Importa las rutas de usuario desde el archivo 'route.js'
const userRoutes = require('./routes/route');

// Función asincrónica para conectar a la base de datos MongoDB Atlas
async function start() {
    try {
        await mongoose.connect(uri); // Conecta a la base de datos utilizando la URI
    } catch (err) {
        console.log(err); // Si hay un error, imprime el mensaje de error en la consola
    }
}

// Llama a la función 'start' para conectar a la base de datos
start();

// Utiliza las rutas de usuario en la aplicación Express
app.use('', userRoutes);

// Inicia el servidor y lo hace escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Express backend running on localhost: ${port}`); // Imprime un mensaje indicando que el servidor se ha iniciado
});