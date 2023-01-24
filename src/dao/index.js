import mongoose from 'mongoose'
import orderModel from './models/order.model.js'

const env = async() => {
    await mongoose.connect('mongodb://127.0.0.1:27017')
    console.log('DB connected!');



    const orders = await orderModel.aggregate([
        {$match: {size: 'medium'}},  //$match: Aplica filters en nuestra query
        {
            $group: {
                _id: "$name", 
                totalQuantity: { $sum: "$quantity" }
            }
        },
        { $sort: { totalQuantity: -1 } },
        {
            /**
             *  Guardamos el resultado en un documento nuevo. El documento nuevo
             *  va a tener _id y orders. Hacemos push para guardar todo el resultado anterior
             *  en un campo del nuevo documento llamado orders.
             *  
             */
            $group: {
                _id: 1,
                orders: { $push: "$$ROOT"}
            }
        },
        {
            $project: { // Usamos project para poder generar un nuevo ObjectID
                "_id": 0, // Genera un Object ID
                orders: "$orders"
            }
        },
        {
            $merge: {into: 'reports'} // Exporta a una coleccion el resultado
        }
    ])

    console.log(JSON.stringify(orders, null, 2, '\t'))

    process.exit()
}

env()
