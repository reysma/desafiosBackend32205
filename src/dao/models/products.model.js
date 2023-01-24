import mongoose from "mongoose";

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    title: String, 
    model: String,
    price: Number, 
    thumbnail: [String],
    code: String, 
    status: String,
    stock: Number, 
})

const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel