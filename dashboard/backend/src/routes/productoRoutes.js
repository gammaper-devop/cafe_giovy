const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Rutas para productos
router.get('/', productoController.getTodosLosProductos);
router.get('/:id', productoController.getProductoPorId);
router.post('/', productoController.crearProducto);
router.put('/:id', productoController.actualizarProducto);
router.delete('/:id', productoController.eliminarProducto);

// Ruta para actualizar solo el array 'tipos' de un producto
router.put('/tipos/:id', productoController.actualizarTiposProducto);

module.exports = router;
