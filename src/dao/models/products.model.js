import mongoose from 'mongoose'

import mongoosePaginate from 'mongoose-paginate-v2'


const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    title: String, 
    model: String,
    price: Number, 
    image: String,
    code: String, 
    status: String,
    stock: Number, 
    category: String, 
})
productsSchema.plugin(mongoosePaginate)
const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel