import {ProductManagerFilesystem} from './ProductManager.js';

const ProductManager = new ProductManagerFilesystem(
    "./src/db/products.json"
);
export {ProductManager};

