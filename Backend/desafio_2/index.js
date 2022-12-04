const ProductManager= require('./desafio_2_filesystem.js');

const manager = new ProductManager('products.json');

(async  () => {
    await  manager.addProduct ({
        title: "Analizador Elemental",
        description: "EA-2400", 
        price: "7200$",
        thumbnail: "imagen 3", 
        code: 456789, 
        stock: 6,
        
    
    })
        console.log(await manager.getProducts());
        
        await manager.updateProduct(1, {
            title: "Phmetro",
            description: "Modelo A-300", 
            price: "2000$", 
            thumbnail: "imagen1", 
            code: 538949, 
            stock: 4,
         
        })

   
})()
