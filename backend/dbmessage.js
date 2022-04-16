import mongoose from "mongoose";

const whatsappschema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    recieved : Boolean,
});

//collection
export default mongoose.model('messagecontent', whatsappschema)
