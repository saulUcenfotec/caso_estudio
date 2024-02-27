const user = require('../../models/usuarios');

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
module.exports = {
    getUsuario,
    createUsuario
}