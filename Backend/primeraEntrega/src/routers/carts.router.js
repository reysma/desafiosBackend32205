import{ cartsRouter} from 'express'

const cartsrouter = cartsRouter()
const carts = [];

router.get('/', (req, res) => {

     res.json({ carts})

 })
 
router.post('/', (req, res) => {
    const carts = req.body
    users.push(carts)

     res.json({ status: "success" })

 })

 export default cartsrouter 
  