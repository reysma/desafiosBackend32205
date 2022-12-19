import{ Router} from 'express'

const router = Router()

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
        const {title, description, price, thumbnail, code, status, stock, category} = req.body

        if(!title || !description || !price || !thumbnail || !code || !status || !stock || !category) {
            return res.send({
                success: false, 
                error: "Todos los datos son requeridos", 
            });
        }

       const addProduct = await ProductManager.addProduct({
        title,
        description,


       })

    } catch (error) {
        return addProduct
    }
})

app.post('/api/carts', async (req, res) => {
    try {
        const {id, title} = req.body

        if(!title || !id ) {
            return res.send({
                success: false, 
                error: "Todos los datos son requeridos", 
            });
        }

       const addProductsCart = await CartManager.addProduct({
        title,
        description,

       })

    } catch (error) {
        
    } return addProductsCart
})

 export default router 
  