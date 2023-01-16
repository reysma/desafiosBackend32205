import { Router } from 'express';
import cartModel from '../dao/models/cart.models.js';

const router = Router();

router.get('/', async (req, res) => {
    
    try {
        const carts = await cartModel.find();

        if(!carts) {
            return res.send({
                succes:false,
            })}
       

    } catch (error) {
        console.log(error)
    }

})

router.post('/', async (req, res) => {
    
    try {
        const newCart = {
            products:[],
        };

        const result = await cartModel.create(newCart);

        res.send({
            succes: true, 
            payload: result,
        });
    } 
    catch (error) {
        console.log(error);
        return res.send({
            succes:false,
        })
    }

})

export default router