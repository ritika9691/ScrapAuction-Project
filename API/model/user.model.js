import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
var userSchema=mongoose.Schema({
_id:Number,
name:{
    type:String,
    required:[true,"Name is required"],
    trim:true,
    lowercase:true
},
email:{
    type:String,
    required:[true,"Email is required"],
    trim:true,
    lowercase:true,
    unique:true
},
password:{
    type:String,
    required:[true,"Password is required"],
    trim:true,
    lowercase:true,
    maxlength:10,
    minlength:5
},
mobile:{
    type:Number,
    required:[true,"Mobile is required"],
    trim:true,
    lowercase:true,
    maxlength:10,
    minlength:10
},
address:{
    type:String,
    required:[true,"Address is required"],
    trim:true,
    lowercase:true
},
city:{
    type:String,
    required:[true,"City is required"],
    trim:true,
    lowercase:true
},
gender:{
    type:String,
    required:[true,"Gender is required"],
    trim:true,
    lowercase:true
},
role:String,
status:Number,
info:String
});

userSchema.plugin(uniqueValidator);
const userSchemaModel=mongoose.model('user_collection',userSchema);
export default userSchemaModel;

