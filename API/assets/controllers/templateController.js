const Template = require("../models/template");

function getTemplate(req, res) {
  Template.find()
    .then((response) => {
      res.status(200).send({ templates: response });
    })
    .catch((err) => {
      res.status(500).send({ error: err });
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

  Template.create(payload)
    .then((response) => {
      res.status(200).send({ template: response });
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
}

async function nombreTemplate(req, res) {
  try {
    const template = await Template.findOne({ nombre: req.body.nombre });
    if (!template) {
      res.status(404).send("Template no encontrado");
    } else {
      res.status(200).send({ template });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
}

async function userIdTemplate(req, res) {
  try {
    const userId = req.query.userId;

    if (!userId) {
      return res.status(400).json({
        error: "Debe proporcionar userId en los parámetros de consulta.",
      });
    }

    const templates = await Template.find({ userId });
    res.status(200).json({ templates });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function templateIdTemplate(req, res) {
  try {
    const templateId = req.query.templateId;

    if (!templateId) {
      return res.status(400).json({
        error: "Debe proporcionar templateId en los parámetros de consulta.",
      });
    }

    const templates = await Template.find({ _id: templateId });
    res.status(200).json({ templates });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  getTemplate,
  createTemplate,
  nombreTemplate,
  userIdTemplate,
  templateIdTemplate,
};
