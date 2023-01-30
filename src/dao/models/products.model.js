import mongoose from "mongoose";

const productsCollection = 'products';

const productSchema = new mongoose.Schema({
    id: String,
    title: String,  
    image: String,
    model: String,
    price: Number, 
    code: Number, 
    stock: Number, 
})

const productsModel = mongoose.model(productsCollection, productSchema);

export default productsModel