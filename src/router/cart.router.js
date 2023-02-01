import { Router } from 'express';
import cartModel from '../dao/models/cart.model.js';

const router = Router();


//Ver el carrito
router.get('/', async (req, res) => {

    try {
        const carts = await cartModel.find();

        res.send({
            status: "succes",
            payload: carts,
        });
    } catch (error) {
        console.log(error)
    }

})

//crear un cart nuevo
router.post('/', async (req, res) => {

    try {
        const newCart = {
            products: [],
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
            succes: false,
        })
    }

})

export default router