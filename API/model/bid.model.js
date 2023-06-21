import mongoose from "mongoose";
// import uniqueValidator from 'mongoose-unique-validator';
var bidSchema = mongoose.Schema({
    _id: Number,
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
        lowercase: true
    },
    productbaseprice: {
        type: String,
        required: [true, " base price name is required"],
        trim: true,
        lowercase: true
    },
    currentprice: {
        type: String,
        required: [true, " current price name is required"],
        trim: true,
        lowercase: true,
    },
    userprice: {
        type: String,
        required: [true, " user price name is required"],
        trim: true,
        lowercase: true,
    },
    info: String,
    Product_id: Number


});
// productSchema.plugin(uniqueValidator);
const bidSchemaModel = mongoose.model('bid_collection', bidSchema);
export default bidSchemaModel;

