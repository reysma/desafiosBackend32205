<<<<<<< HEAD
import { Router } from 'express'
import mongoose from 'mongoose'
import productsModel from '../dao/models/products.models.js'

const router = Router()

//Lista de todos los productos
router.get('/', async (req, res) => {
    
        const limit = req.query?.limit || 10
        const page = req.query?.page || 1
        const filter = res.query?.query || ""

        const search = {}
        if(filter) {
            search[ "$or"] = [
                { title: {$regex: filter}},
                {price: {$regex: filter}}
            ]
        }
        const options = {page, limit, lean: true}
        
        console.log(search,options);
        
        const result = await productsModel.paginate(search, options) 
        
        console.log(result)

        res.render('index', result)

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

//ingresar product new
=======
import { Router } from 'express';
import mongoose from 'mongoose';
import productsModel  from '../dao/models/products.model.js';

const router = Router()

//Lista de todos los productos
router.get('/', async (req, res) => {
    

    try {
        const products = await productsModel.find().lean().exec()
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

>>>>>>> 73c7c3fe10183adfd7d85178c2f8a04b65ab35e0
router.post('/create', async (req, res) => {

    try {
        const newProduct = req.body;
<<<<<<< HEAD
        const productGenerated = new productsModel(newProduct);
    await productGenerated.save();

    console.log(productGenerated);

    res.redirect('/product/' + productGenerated.title)
=======
>>>>>>> 73c7c3fe10183adfd7d85178c2f8a04b65ab35e0
        
        if(!newProduct) {
            return res.send({
                succes: false,
            })
        }
    
<<<<<<< HEAD
=======
    const result = await productsModel.create(newProduct);
    
    res.send({
        succes:true,
        status: result,
        payload: newProduct,
    })
>>>>>>> 73c7c3fe10183adfd7d85178c2f8a04b65ab35e0
}
    catch (error) {
        console.log("enviando sin conexion mongo", error);
    }

})
<<<<<<< HEAD
//Muestra un solo producto
router.get('/: title', async (req, res) => {
    

    try {
        const title = req.params.title

        const product = await productsModel.findOne({ title: title }).lean().exec()

        res.render('one', { product })

        if(!product) {
            return res.send({
                succes:false,
            })}
       
    } catch (error) {
        console.log("usuario sin conexion mongo", error)
    }

})


export default router
=======


export default router

>>>>>>> 73c7c3fe10183adfd7d85178c2f8a04b65ab35e0
