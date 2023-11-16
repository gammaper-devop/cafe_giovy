const mongoose = require('mongoose')

// Definicion del esquema de productos. 
const ProductoSchema = new mongoose.Schema({
    descripcion: String,
    tipos: [{
        nombre: String,
        precio: Number
    }],
    image: String
})

const ProductoModel = mongoose.model('productos', ProductoSchema) 

module.exports = ProductoModel
