import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import productRouter from './router/product.router.js'
import viewsProduct from './router/views.product.router.js'
import cartsRouter from './router/cart.router.js'
import mongoose from 'mongoose'
import session from "express-session"
import bodyParser from 'body-parser'
import MongoStore from "connect-mongo";


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


// Sesiones
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: MONGOOSE_URI,
      dbName: "ecommerce",
      mongoOptions: {
        useNewUrlParser: true,
      },
      ttl: 100,
    }),
    secret: "Venezuela",
    resave: true,
    saveUninitialized: true,
  })
);

//Ruta de Vistas
app.use('/products', productRouter) ;

app.use('/views_products', viewsProduct );
app.use('/carts', cartsRouter);

app.get('/', (req,res) => { res.send('Conecting')})

//Conexion a BD con Mongo Atlas
const MONGO_URI = 'mongodb+srv://reysma:458260rey@cluster0.o8moagj.mongodb.net/?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI, 
  { dbName: "baseCRUD" },  
  (error) => { 
      if(error) {
        console.log('Not Found Connecting');
      process.exit();
        }
    console.log('DB connected!');
    app.listen(PORT, () => console.log('Server Listening...!!!'));
})     

