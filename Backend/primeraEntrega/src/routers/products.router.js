import{ productsRouter} from 'express'

const productsrouter = productsRouter()
const products = [];

router.get('/', (req, res) => {

     res.json({ products })

 })
 
router.post('/', (req, res) => {
    const products = req.body
    users.push(products)

     res.json({ status: "success" })

 })

 export default productsrouter 
  