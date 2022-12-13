import {ProductManagerFilesystem} from './ProductManager.js';

import { CartManagerFilesystem } from './CartsManager.js';


const ProductManager = new ProductManagerFilesystem(
    "./src/db/products.json"
);
const CartManager = new CartManagerFilesystem (
    ".src/db/carts.json"
)
export { ProductManager };
export { CartManager };

