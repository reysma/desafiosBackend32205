import express from 'express'
import session from 'express-session'
import FileStore from 'session-file-store'
import MongoStore from 'connect-mongo'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import productRouter from './router/product.router.js'
import viewsProduct from './router/views.product.router.js'
import sessionRouter from './router/sesion.router.js'
import mongoose from 'mongoose'
import { Server } from 'socket.io'



//configurar session de user
app.use(session({
  store: MongoStore.create({
      mongoUrl: uri,
      dbName: "sessions",
      mongoOptions: {
          useNewUrlParser: true,
          useUnifiedTopology: true
      },
      ttl: 10
  }),
  secret: '123456',
  resave: true,
  saveUninitialized: true
}))

function auth(req, res, next) {
  if(req.session?.user) return next()

  return res.status(401).send(console.log('error'))
}

app.get('/', (req, res) => res.send('OK'))
app.get('/login', (req, res) => {
  const { username } = req.query

  req.session.user = username

  res.send('Login Success')
})
app.get('/logout', (req, res) => req.session.destroy(err => res.send(err)) )
app.get('/private', auth, (req, res) => res.send('Private Page'))


const PORT = 8080;
const app = express(); 

//trae informacion como json
app.use(express.json());
const httpServer = app.listen(PORT, () => console.log('Listening desde Httpserver...'))
const socketServer = new Server(httpServer)

//Configurar motor plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static( __dirname + '/public'));

//conexion a socket 
socketServer.on('connection', socket => {
  console.log('nuevo cliente conectado...')
  socket.on('message', data => {
    console.log(data)
  })
})
//Ruta de Vistas
app.use('/api/products', productRouter);
//app.use('/api/carts', cartRouter);
app.use('/views_products', viewsProduct);

app.get('/', (req,res) => { res.send('Conecting')})

//Conexion a BD con Mongo Atlas
const MONGO_URI = 'mongodb+srv://reysma:458260rey@cluster0.o8moagj.mongodb.net/?retryWrites=true&w=majority'
 
   
mongoose.set('strictQuery',false)
mongoose.connect(MONGO_URI, error =>{ 
      if(error) {
        console.log('Not Found Connecting');
      process.exit()
        }
    console.log('DB connected!');
    app.listen(PORT, () => console.log('Server Listening...!!!'));
})
       

