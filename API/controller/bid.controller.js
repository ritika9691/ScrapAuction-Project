import "../model/connection.js";
import bidSchemaModel from "../model/bid.model.js";
import path from 'path';
import rs from 'randomstring';
import url from 'url';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));




export var save = async (req, res, next) => {
    let pDetails = req.body;
    // var picon = req.files.producticon;
    // var producticon = rs.generate() + "-" + picon.name;
    let plist = await bidSchemaModel.find();
    let l = plist.length;
    let _id = l == 0 ? 1 : plist[l - 1]._id + 1;
    let pid = l == 0 ? 1 : plist[l - 1]._id + 1;

    pDetails = { ...pDetails, "_id": _id, "Product_id ": pid, "info": Date() };
    console.log(pDetails);
    let result = await bidSchemaModel.create(pDetails);
    console.log(result);
    if (result) {
        // var uploadpath = path.join(__dirname, "../../UI/public/assets/uploads/producticons", producticon)
        // picon.mv(uploadpath);
        return res.status(201).json({ "msg": "success" })
    } else
        return res.status(500).json({ "error": "sever error" })
};



export var fetch = async (req, res, next) => {

    // var condition_obj = ({ "role": "user" });
    // var condition_obj=JSON.parse(req.body.condition_obj)
    var condition_obj = url.parse(req.url, true).query
    // console.log(condition_obj);
    var user = await bidSchemaModel.find(condition_obj);
    // console.log(user);
    // console.log(req.body.data);
    if (user.length != 0)
        return res.status(201).json(user);
    else
        return res.status(500).json(user);
}