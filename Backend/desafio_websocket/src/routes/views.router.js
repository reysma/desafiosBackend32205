import { Router } from "express";

import { productManager } from "..manager/index.js";

const router = Router();

router.get("/". async (req, res)  => {

    const products = await productManager.getProducts();
    res.render("Home", {products,
    })
})