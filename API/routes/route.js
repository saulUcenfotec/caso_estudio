const express = require('express');
const userController = require('../assets/controllers/userController');
const app = express.Router();
const multiparty = require('connect-multiparty');


const md = multiparty({});

app.get('/usuarios', userController.getUsuario);
app.post('/usuarios/crear', md, userController.createUsuario);
app.post('/usuarios/login', md, userController.loginUsuario);


module.exports = app;