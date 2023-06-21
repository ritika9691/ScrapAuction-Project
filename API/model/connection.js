import mongoose from "mongoose";
var url="mongodb://127.0.0.1:27017/ScrapAuction";
mongoose.connect(url);
console.log("mongodb server connect successfully");