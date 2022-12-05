import fs from 'fs'

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

}
new ProductManagerFilesystem("producto");