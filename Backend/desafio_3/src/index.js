import express from "express";
import {ProductManager} from './Managers/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT =8080;

app.get('/api/products', async (req, res) => {
    try{
        const {limit} = req.query;


const allProducts = await ProductManager.getProducts()

if(!limit || limit <1) {

    return res.send({success: true, products: allProducts});
}
    const products = allProducts.slice(0,  limit);
    res.send({success: true, products});
}catch (error) {
    console.log(error);
    res.send({success: false, error: "Ha ocurrido un error"});
}

})

app.get("/api/products/:id", async(req, res) => {
    try {
        const { id: paramId} = req.params

        const id = Number(paramId)

        if(id <0) {
            return res.send ({success: false, error: "El id debe ser Numero valido",})
        }
        const product =await ProductManager.getProductById(id)

        if(!product) {
            return res.send ({success: false, error: "producto no encotrado"});
        }
        res.send({success: true, product});
    } catch (error) {
        console.log(error);
        res.send({success:false, error: "Ha ocurrido un error"})
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const {title, description, price, thumbnail, code, stock} = req.body

        if(!title || !description || !price || !thumbnail || !code || !stock) {
            return res.send({
                success: false, 
                error: "Todos los datos son requeridos", 
            });
        }

       const savedProduct = await ProductManager.addProduct({
        title,
        description,

       })

    } catch (error) {
        
    }
})

app.listen(PORT, ()=> console.log(`Servidor activo en PORT ${PORT}`));

