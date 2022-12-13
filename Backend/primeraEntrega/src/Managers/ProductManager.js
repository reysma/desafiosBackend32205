import fs from 'fs'
import{ } from 'express'
export class ProductManagerFilesystem {

    constructor(path) {
        this.path = path

        this.#init()

    }
#init() {
    try {
        const existFile = fs.existsSync(this.path);
        
        if(existFile) return;
        fs.writeFileSync(this.path, JSON.stringify([]));

    } catch (error) {
        console.log(error);
    }
}
async getProducts() {
    const response = await fs.promises.readFile(this.path, "utf-8");
    return JSON.parse(response);
}

async getProductById(id) {
    const products = await this.getProducts();
    const productFound = products.find(product => product.id === id);
    return productFound;
}

async addProduct({ title, description, price, thumbnail, code, status, stock, category}){
    
    const newProduct = { title, description, price, thumbnail, code, status, stock, category}

    const products = await this.getProducts()
    
    const existCodeProduct = products.some(product => product.code === code)

    if(existCodeProduct) {
        throw new error("El codigo no se puede repetir");
    }
    newProduct.id =!products.length ? 1 : products[products.length - 1].id +1

    products.push(newProduct);

    await fs.promises.writeFile(this.path), JSON.stringify(products, null, 3);
    return newProduct; 
}


}
new ProductManagerFilesystem("producto");