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

    console.log(payload);
    user.create(payload).then(response => {
            res.status(200).send({ response });
        })
        .catch(err => {
            res.status(500).send({ response: err });
        })
}

async function loginUsuario(req, res) {
    const payload = req.body;
    try {
        var usuario = await user.findOne({ nombre: req.body.nombre, contrasena: req.body.contrasena });
        if (usuario == null) {
            res.status(404).send("not found");
        } else {
            res.status(200).send({ "usuario": usuario });
        }
    } catch (err) {
        console.log(err.message);
        res.status(404).send("not found");
    }
}
module.exports = {
    getUsuario,
    createUsuario,
    loginUsuario
}