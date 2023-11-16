const Tipo = require('../models/type.model');

// Crear un nuevo tipo
exports.crearTipo = async (req, res) => {
  const { nombre, precio } = req.body;

  try {
    const nuevoTipo = new Tipo({ nombre, precio });
    await nuevoTipo.save();
    res.status(201).json(nuevoTipo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear un nuevo tipo' });
  }
};
