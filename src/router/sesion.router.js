import { Router } from 'express';
//import userModel from '../dao/models/user.model.js'

const router = Router()


// vista para registrar sessions
router.get('/register', async (req, res) => {
    res.render('sessions/register', {} )
})


//Api para crear usuarios de clientes
router.post('/create', async (req, res) => {

    try {
        const userNew = req.body;
        
        if(!userNew) {
            return res.send({
                succes: false,
            })
        }
    
    const user = await userModel.create(userNew);
    res.redirect('sessions/login')

    res.send({
        succes:true,
        status: user,
        payload: userNew,
    })
}
    catch (error) {
        console.log("enviando sin conexion mongo", error);
    }

})

//Muestra un usuario
router.get('/login', async (req, res) => {
    

    try {
            res.render('sessions/login', {})

        if(true) {
            return res.send({
                succes:false,
            })}
       
    } catch (error) {
        console.log("usuario sin conectar", error)
    }

})

// enviar datos user
router.post('/login', async (req, res) => {
    
    const { username, password } = req.body
    try {
            const user =await userModel.findOne({email, password})

        if(!username | !password) {
            return res.send({
                succes:false,
            })}
       
    } catch (error) {
        console.log("usuario sin loguear", error)
    }

})


export default router

