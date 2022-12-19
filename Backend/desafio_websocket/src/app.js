import express from 'express'
import __dirname from './dirname.js';
import handlebars from 'express-handlebars'
import { Server as HttpServer } from 'http'
import { Server as IOServer } from 'socket.io'

import { productsRouter } from "./routes/index.js"
import { log } from 'console';

const PORT = 8080;
const app = express();

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//const httpServer = app.listen(8080, () => console.log('listeing...'))
//const socketServer = new Server(httpServer)


app.engine("hbs",
 handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
 })
);

app.set("view engine", "hbs");
app.set('view engine', `${__dirname} + /views`);

app.get("/", (req, res) => {
    res.render("Home");
});

app.use(express.static(__dirname + '/public'))
app.use('/', (req, res) => res.send('ok'))

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/products", productsRouter);

const server = httpServer.listen(PORT, () => 
    console.log(`Server runnig Port ${server.address().port}`)
    );
    server.on("error", (error)  => {
        console.log(error);
    })

    io.on('connection', socket => {
        console.log(`Client connected, id: ${ socket.id }`);

        io.sockets.emit("Saludos!!")

        io.sockets.emit("products", products)
    })