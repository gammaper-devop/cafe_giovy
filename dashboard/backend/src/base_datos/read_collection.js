const controller = {}
const _connect = require('./mongoDbConnection')
const ProductModel = require('../models/product.model')

controller.index = async(req, res) => {
    try{
        // mongo connection
        _connect()

        const allProducts = await ProductModel.find()

        console.log('Productos --> ', allProducts)
    } catch(err){
        console.error(err)
    }
}

module.exports = controller
