import mongoose from "mongoose";

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    title: String, 
    model: String,
    price: Number, 
<<<<<<< HEAD
    image: [String],
    code: Number, 
=======
    thumbnail: [String],
    code: String, 
    status: String,
>>>>>>> f4c5cc091a259cc6fbe76c0c313a4861ef603196
    stock: Number, 
})

const ProductsModel = mongoose.model(productsCollection, productsSchema);

export default ProductsModel