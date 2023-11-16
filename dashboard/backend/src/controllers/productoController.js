const Producto = require('../models/product.model');

// Obtener todos los productos
exports.getTodosLosProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Crear un nuevo producto
exports.crearProducto = async (req, res) => {
  const { descripcion, tipos, image } = req.body;

  try {
    const nuevoProducto = new Producto({ descripcion, tipos, image });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear un nuevo producto' });
  }
};

// Obtener un producto por ID
exports.getProductoPorId = (req, res) => {
  Producto.findById(req.params.id, (err, producto) => {
    if (err) {
      return res.status(400).json({ error: 'No se pudo obtener el producto.' });
    }
    res.json(producto);
  });
};

// Actualizar un producto existente
exports.actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { descripcion, tipos, image } = req.body;

  try {
    const producto = await Producto.findByIdAndUpdate(id, { descripcion, tipos, image }, { new: true });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto
exports.eliminarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    await Producto.findByIdAndRemove(id);
    res.json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

// Actualizar solo el array 'tipos' de un producto existente
exports.actualizarTiposProducto = async (req, res) => {
  const { id } = req.params;
  const { tipos } = req.body;

  try {
    const producto = await Producto.findByIdAndUpdate(id, { tipos }, { new: true });
    res.json(producto);
  } catch (err) {
    console.error('Error updating tipos:', err);
    res.status(500).json({ error: 'Error al actualizar el array de tipos del producto' });
  }
};
