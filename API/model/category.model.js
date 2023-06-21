import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
var categorySchema=mongoose.Schema({
_id:Number,
catname:{
    type:String,
    required:[true,"Name is required"],
    trim:true,
    lowercase:true,
    unique:true
},
caticonname:{
    type:String,
    trim:true,
    lowercase:true,
}
});

categorySchema.plugin(uniqueValidator);
const categorySchemaModel=mongoose.model('category_collection',categorySchema);
export default categorySchemaModel;

