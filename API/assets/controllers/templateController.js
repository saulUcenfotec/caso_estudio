const template = require("../models/template");

function getTemplate(req, res) {
  template
    .find()
    .then((response) => {
      res.status(200).send({ response });
    })
    .catch((err) => {
      res.status(500).send({ response: err });
    });
}

function createTemplate(req, res) {
  const payload = req.body;
  console.log(payload);

  switch (payload.categoria) {
    case "CPlantilla":
      payload.categoria = 1;
      break;
    case "GPlantilla":
      payload.categoria = 2;
      break;
    case "GUsuario":
      payload.categoria = 3;
      break;
  }
  template
    .create(payload)
    .then((response) => {
      res.status(200).send({ template: response });
    })
    .catch((err) => {
      res.status(500).send({ response: err });
    });
}
async function nombreTemplate(req, res) {
  try {
    var template = await user.findOne({ nombre: req.body.nombre });
    if (template == null || template == "") {
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
  getTemplate,
  createTemplate,
  nombreTemplate,
};
