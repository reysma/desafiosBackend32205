const express = require('express')

const ProductManager = require('./desafio_2_filesystem')

const app =express()
const manager = new ProductManager('products.json')

app.get('/', async (req, res) => {

    const products = await manager.getProducts()
    res.json(products)

})
app.get('/add', async (req, res) => {

    const body = req.query
    const obj = await manager.addProducts(body)
    res.json(obj)

})

app.listen(8080)

