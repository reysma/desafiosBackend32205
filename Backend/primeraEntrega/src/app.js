import express from "express";
import productRouter from "./routers/products.router.js";
import cartRouter from './routers/carts.router.js'
import ManagerFile from "./manager/productManager.js";
import CartManager from "./manager/cartManager.js";
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/static', express.static('public'))

app.use('/api/products', productRouter);

app.use('/api/carts', cartRouter);



app.use('/', (req, res) => res.send('HOME'));

const PORT =8080;

app.listen(PORT, ()=> console.log(`Servidor activo en PORT ${PORT}`));

