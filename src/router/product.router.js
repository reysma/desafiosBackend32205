import{ Router } from 'express'
import productsModel  from '../dao/models/products.model.js';

const router = Router()

router.get('/', async (req, res) => {
    const products = await productsModel.find()

    res.json(products)
})

router.post('/', async (req, res) => {

    const result = await productsModel.create(req.body)

    res.json(result)
})

export default router 