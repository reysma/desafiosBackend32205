import express from 'express';
import { productsModel } from '../dao/models/products.models.js';

const router = express.Router() 

router.get('/', async (req, res) => {s
    

    try {
        const products = await productsModel.find();

        if(!products) {
            return res.send({
                succes:false,
            })}
       

    } catch (error) {
        console.log("usuario sin conexion mongo", error)
    }

})


router.post('/', async (req, res) => {

    try {
        const newProduct = req.body;
        
        if(!newProduct) {
            return res.send({
                succes: false,
            })
        }
    
    const result = await productsModel.create(newProduct);
    
    res.send({
        succes:true,
        status: result,
        payload: newProduct,
    })
}
    catch (error) {
        console.log("enviando sin conexion mongo", error);
    }

})


export default router