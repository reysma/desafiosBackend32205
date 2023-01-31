<<<<<<< HEAD
import { Router } from 'express'
import mongoose from 'mongoose'
import productsModel from '../dao/models/products.models.js'


const router = Router()
=======
import{ Router } from 'express'
import productsModel  from '../dao/models/products.model.js';

>>>>>>> 73c7c3fe10183adfd7d85178c2f8a04b65ab35e0

const router = Router()
router.get('/', async (req, res) => {


    try {
        const products = await productsModel.find().lean().exec()
<<<<<<< HEAD
=======
        console.log(products)
        res.render('index', {
            products
        })
        if(!products) {
            return res.send({
                succes:false,
            })}
       

    } catch (error) {
        console.log("usuario sin conexion mongo", error)
    }

})
//Muestraun solo producto
router.get('/: title', async (req, res) => {
    

    try {
        const title = req.params.title

        const product = await productsModel.findone({ title: title }).lean().exec()

        res.render('one', { product })

        if(!product) {
            return res.send({
                succes:false,
            })}
       
    } catch (error) {
        console.log("usuario sin conexion mongo", error)
    }

})
//delete products
router.get('/delete/:id', async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id)
    const deleted = await productsModel.deleteOne({ _id: id })

    console.log(deleted)

    res.redirect('/products')
})


// vista para crear products
router.get('/create', async (req, res) => {
    res.render('create', {} )
})

router.post('/create', async (req, res) => {

    try {
        const newProduct = req.body;
>>>>>>> 73c7c3fe10183adfd7d85178c2f8a04b65ab35e0
        
        res.render('index', {
            products
        })
        if (!products) {
            return res.send({
                succes: false,
            })
        }


    } catch (error) {
        console.log("usuario sin conexion mongo", error)
    }

})
//Muestra un solo producto
router.get('/', async (req, res) => {


    try {
        const title = req.params.title

        const product = await productsModel.findOne({ title: title }).lean().exec()

        res.render('one', { product })

        if (!product) {
            return res.send({
                succes: false,
            })
        }

    } catch (error) {
        console.log("usuario sin conexion mongo", error)
    }

})
//delete products
router.get('/delete/:id', async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id)
    const deleted = await productsModel.deleteOne({ _id: id })

    console.log(deleted)

    res.redirect('/products')
})


// vista para crear products
router.get('/create', async (req, res) => {
    res.render('create', {})
})

router.post('/create', async (req, res) => {

    try {
        const newProduct = req.body;

        if (!newProduct) {
            return res.send({
                succes: false,
            })
        }

        const result = await productsModel.create(newProduct);

        res.send({
            succes: true,
            status: result,
            payload: newProduct,
        })
    }
    catch (error) {
        console.log("enviando sin conexion mongo", error);
    }

})


export default router 