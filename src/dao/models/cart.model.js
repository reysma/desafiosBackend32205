import mongoose from "mongoose";

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    id: String,
    title: String, 
    model: String,
    price: Number, 
    image: String,
    code: Number, 
    stock: Number, 
})

const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel