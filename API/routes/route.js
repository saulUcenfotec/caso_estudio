const express = require('express');
const userController = require('../assets/controllers/userController');
const app = express.Router();
const multiparty = require('connect-multiparty');
const path = require('path');
const ruta = path.join(__dirname, '../..', 'Public');


const md = multiparty({});

app.get('/usuarios', userController.getUsuario);
app.post('/usuarios/crear', md, userController.createUsuario);
app.post('/usuarios/login', md, userController.loginUsuario);
app.get('/login', (req, res) => {
    res.sendFile(path.join(ruta, 'login.html'));
})

module.exports = app;