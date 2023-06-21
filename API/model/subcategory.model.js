import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
var subcategorySchema=mongoose.Schema({
_id:Number,
catname:{
    type:String,
    required:[true,"cat name is required"],
    trim:true,
    lowercase:true
},
subcatname:{
    type:String,
    required:[true," sub name is required"],
    trim:true,
    lowercase:true,
    unique:true

},
subcaticonname:{
    type:String,
    trim:true,
    lowercase:true,
}
});

subcategorySchema.plugin(uniqueValidator);
const subcategorySchemaModel=mongoose.model('subcategory_collection',subcategorySchema);
export default subcategorySchemaModel;

