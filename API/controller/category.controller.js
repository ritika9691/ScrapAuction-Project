import "../model/connection.js";
import categorySchemaModel from "../model/category.model.js";
import path from 'path';
import rs from 'randomstring';
import url from 'url';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));




export var save = async (req, res, next) => {
    let cDetails = req.body;
    var caticon = req.files.caticon;
    cDetails.caticonname = rs.generate() + "-" + caticon.name;
    let clist = await categorySchemaModel.find();
    let l = clist.length;
    let _id = l == 0 ? 1 : clist[l - 1]._id + 1;
    cDetails = { ...cDetails, "_id": _id };
    let result = await categorySchemaModel.create(cDetails);
    if (result) {
        var uploadpath = path.join(__dirname, "../../UI/public/assets/uploads/caticons", cDetails.caticonname)
        caticon.mv(uploadpath);
        return res.status(201).json({ "msg": "success" })
    } else
        return res.status(500).json({ "error": "sever error" })
};



export var fetch = async (req, res, next) => {

    // var condition_obj = ({ "role": "user" });
    // var condition_obj=JSON.parse(req.body.condition_obj)
    var condition_obj = url.parse(req.url, true).query
    // console.log(condition_obj);
    var user = await categorySchemaModel.find(condition_obj);
    // console.log(user);
    // console.log(req.body.data);
    if (user.length != 0)
        return res.status(201).json(user);
    else
        return res.status(500).json(user)
}