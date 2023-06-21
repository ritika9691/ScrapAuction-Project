import mongoose from "mongoose";
// import uniqueValidator from 'mongoose-unique-validator';
var productSchema = mongoose.Schema({
    _id: Number,
    catname: {
        type: String,
        required: [true, "cat name is required"],
        trim: true,
        lowercase: true
    },
    subcatname: {
        type: String,
        required: [true, " sub name is required"],
        trim: true,
        lowercase: true
    },
    productname: {
        type: String,
        required: [true, " pro name is required"],
        trim: true,
        lowercase: true,
    },
    productdescription: {
        type: String,
        required: [true, " dis name is required"],
        trim: true,
        lowercase: true,
    },
    productbaseprice: {
        type: String,
        required: [true, " price name is required"],
        trim: true,
        lowercase: true,
    },
    producticonname: {
        type: String,
        required: [true, " icon name is required"],
        trim: true,
    
    },
    info: String

});
// productSchema.plugin(uniqueValidator);
const productSchemaModel = mongoose.model('product_collection', productSchema);
export default productSchemaModel;

