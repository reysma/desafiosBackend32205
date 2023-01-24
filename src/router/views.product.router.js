import{ Router } from 'express'

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {})
})

<<<<<<< HEAD
router.get('/:views', (req, res) => {
=======
router.get('/views', (req, res) => {
>>>>>>> f4c5cc091a259cc6fbe76c0c313a4861ef603196
    res.render('index', {}) 
})

export default router 