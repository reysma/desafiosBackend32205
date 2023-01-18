import express from 'express'
import __dirname from './utils.js';
import productRouter from './router/product.router.js'
import viewsProduct from './router/views.product.router.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'

const PORT = 8080;
const app = express(); 

//trae informacion como json
app.use(express.json());


//Configurar motor plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static( __dirname + '/public'));


//Ruta de Vistas
app.use('/products', viewsProduct);
app.use('/views_products', productRouter);

app.get('/', (req,res) => { res.send('Conecting')})

//Conexion a BD
const MONGO_URI = 'mongodb+srv://reysma:458260reysma@cluster0.598euju.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, error =>{ 
      if(error) {
        console.log('Not Found Connecting');
      return
        }
    console.log('DB connected!');
    app.listen(PORT, () => console.log('Server Listening...!!!'));
})
       

