import mongoose from "mongoose";

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    title: String, 
    description: String,
    price: Number, 
    thumbnail: [String],
    code: String,
    status: String,
    stock: Number, 
    category: String, 
})

const ProductsModel = mongoose.model(productsCollection, productsSchema);
export default ProductsModel