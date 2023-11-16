const mongoose = require('mongoose')

// Definicion del esquema tipo
const TipoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    producto: [{ type: mongoose.Schema.Types.ObjectId, ref: 'productos'}]
})

const TipoModel = mongoose.model('tipos', TipoSchema) 

module.exports = TipoModel
