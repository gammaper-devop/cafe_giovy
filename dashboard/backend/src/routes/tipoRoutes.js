const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');

// Rutas para tipos
router.post('/', tipoController.crearTipo);

module.exports = router;
