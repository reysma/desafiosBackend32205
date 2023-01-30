import express from 'express'
import __dirname from './utils.js'
import productRouter from './router/product.router.js'
import viewsProduct from './router/views.product.router.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'


const PORT = 8080;
const app = express(); 

// traermos información de post como JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Configurar motor plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Carpeta Publica
app.use(express.static( __dirname + '/public'));

//Ruta de Vistas
app.use('/products', viewsProduct) ;

app.use('/api/products', productRouter);

app.get('/', (req,res) => { res.send('Conecting')})

//Conexion a BD con Mongo Atlas
const MONGO_URI = 'mongodb+srv://reysma:458260rey@cluster0.o8moagj.mongodb.net/?retryWrites=true&w=majority'
dbName: "baseCRUD"
mongoose.set('strictQuery',false)
mongoose.connect(MONGO_URI, error =>{ 
      if(error) {
        console.log('Not Found Connecting');
      process.exit()
        }
    console.log('DB connected!');
    app.listen(PORT, () => console.log('Server Listening...!!!'));
})
       

