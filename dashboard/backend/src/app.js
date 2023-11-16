const express = require('express')
const cors = require('cors')
const _connect = require('./base_datos/mongoDbConnection')
const productoRoutes = require('./routes/productoRoutes')
const tipoRoutes = require('./routes/tipoRoutes')

_connect()

const app = express()
const PORT = 3002

// Middleware para analizar solicitudes JSON
app.use(express.json())

// Middleware para habilitar CORS
app.use(cors());


app.use('/productos', productoRoutes)
app.use('/tipos', tipoRoutes)

app.listen(PORT, () => console.log(`App listen on ${PORT}`))

