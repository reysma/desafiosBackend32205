import mongoose from "mongoose";

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    title: String, 
    model: String,
    price: Number, 
    image: [String],
    code: Number, 
    stock: Number, 
})

const ProductsModel = mongoose.model(productsCollection, productsSchema);

export default ProductsModel