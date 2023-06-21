import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import fileUpload from "express-fileupload";
var app = express();

import userRouter from './routes/user.router.js'
import categoryRouter from './routes/category.router.js'
import categorySubRouter from './routes/subcategory.router.js'
import productRouter from './routes/product.router.js'
import bidRouter from './routes/bid.router.js'

app.use(bodyParser());
app.use(cors());
app.use(fileUpload());

app.use("/user", userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",categorySubRouter);
app.use("/products",productRouter);
app.use("/bidcontinue",bidRouter);

app.listen(3001)
console.log("Server invoked successfully at link http://localhost:3001");