import "../model/connection.js";
import subcategorySchemaModel from "../model/subcategory.model.js";
import path from 'path';
import rs from 'randomstring';
import url from 'url';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export var save = async (req, res, next) => {
    let cDetails = req.body;
    var subcaticon = req.files.caticon;
    cDetails.subcaticonname = subcaticon.name;

    // var caticon=req.files.caticon;
    cDetails.subcaticonname = rs.generate() + "-" + Date.now() + "-" + subcaticon.name;
    let clist = await subcategorySchemaModel.find();
    let l = clist.length;
    let _id = l == 0 ? 1 : clist[l - 1]._id + 1;
    cDetails = { ...cDetails, "_id": _id };
    // console.log(cDetails)
    let result = await subcategorySchemaModel.create(cDetails);
    if (result) {
        var uploadpath = path.join(__dirname, "../../UI/public/assets/uploads/subicons", cDetails.subcaticonname)
        subcaticon.mv(uploadpath);
        return res.status(201).json({ "msg": "success" })
    } else
        return res.status(500).json({ "error": "sever error" })
};

export var fetch = async (req, res, next) => {
    var condition = url.parse(req.url, true).query
    var user = await subcategorySchemaModel.find(condition);
    if (user.length != 0)
        return res.status(201).json(user);
    else
        return res.status(500).json(user)
}
