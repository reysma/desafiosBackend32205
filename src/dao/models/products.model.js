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
    stock: {
        type: Number,
        index: true,
    },
    category: {
        type: String,
        index: true,
    },
})

mongoosePaginate.paginate.options = {
    limit: 10,
    page: 1,
    sort: { price: 1 },
    lean: true,
};

productsSchema.plugin(mongoosePaginate)
const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel