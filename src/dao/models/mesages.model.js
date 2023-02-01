import mongoose from "mongoose";

const messagesCollection = "messages"
const messagesSchema = new mongoose.Schema {(
    user: String,
    message: String
)}

const messagesModel = mongoose.model(messagesCollection. messagesSchema)

export default messagesModel