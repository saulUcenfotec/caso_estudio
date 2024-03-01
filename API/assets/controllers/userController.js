const user = require('../models/usuarios');

function getUsuario(req, res) {
    user.find().then(response => {
        res.status(200).send({ response });
    }).catch(err => {
        res.status(500).send({ response: err });
    })
}

function createUsuario(req, res) {
    const payload = req.body;
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
    user.create(payload).then(response => {
            res.status(200).send({ "usuario": response });
        })
        .catch(err => {
            res.status(500).send({ response: err });
        })
}

async function loginUsuario(req, res) {
    const payload = req.body;
    try {
        var usuario = await user.findOne({ nombre: req.body.nombre, contrasena: req.body.contrasena });
        if (usuario == null || usuario == "") {
            res.status(404).send("not found");
        } else {
            res.status(200).send({ "usuario": usuario });
        }
    } catch (err) {
        console.log(err.message);
        res.status(404).send("not found");
    }
}

async function nombreUsuario(req, res) {
    try {
        var usuario = await user.findOne({ nombre: req.body.nombre });
        if (usuario == null || usuario == "") {
            res.status(404).send("");
        } else {
            res.status(200).send("");
        }
    } catch (err) {
        console.log(err.message);
        res.status(404).send("not found");
    }
}
module.exports = {
    getUsuario,
    createUsuario,
    loginUsuario,
    nombreUsuario
}