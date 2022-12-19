import express from 'express'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
const PORT =8080;
const app = express();

const httpServer = app.listen(8080, () => console.log('listeing...'))
const socketServer = new Server(httpServer)


app.engine("handlebars",
 handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
 })
);


//app.set('view engine', __dirname + '/views');
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", (req, res) => {
    res.render("Home");
});

app.use(express.static(__dirname + '/public'))
app.use('/', (req, res) => res.send('ok'))

const server =app.listen(PORT, () => 
    console.log(`Server running port ${server.address().port}`)
);
server.on("error", (error)  => {
    console.log(error);
})