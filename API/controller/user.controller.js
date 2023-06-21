import "../model/connection.js";
import userSchemaModel from "../model/user.model.js";
import jwt from 'jsonwebtoken';
import url from 'url'
// to save user details in database 

export var save = async (req, res, next) => {
    let userDetails = req.body;
    console.log(req.body);
    let userlist = await userSchemaModel.find();
    console.log(userlist);
    let l = userlist.length;
    let _id =l == 0 ? 1 : userlist[l - 1]._id + 1;
    userDetails = { ...userDetails, "status": 0, "_id": _id, "role": "user", "info": Date() };
    let user = await userSchemaModel.create(userDetails);
    if (user)
        return res.status(201).json({ "msg": "success" })
    else
        return res.status(500).json({ "error": "sever error" })
};




// to fetch userDetails from database
export var fetch = async (req, res, next) => {
    var condition_obj = url.parse(req.url, true).query

    var user = await userSchemaModel.find(condition_obj);
    if (user.length != 0)
        return res.status(201).json(user);
    else
        return res.status(500).json(user)
}

// to delete userDetails
export var deleteUser = async (req, res, next) => {

    let userlist = await userSchemaModel.find(req.body);
    if (userlist) {
        let user = await userSchemaModel.deleteOne(req.body)
        if (user)
            return res.status(201).json({ "msg": "success" })
        else
            return res.status(500).json({ "errr": "error" })
    }
    else
        return res.status(404).json({ "msg": "data not found" })
}

// export var update = async (req, res, next) => {
//     let condition = req.body.condition_obj;
//     let userDetails = await userSchemaModel.find(condition);
//     if (userDetails) {
//         await userSchemaModel.updateOne((req.body.condition_obj), { "$set": (req.body.content_obj) });
//     }
//     else
//         return res.status(404).json({ "err": "resource not found" })
// }


export var update = async (req, res, next) => {
    let condition = req.body.condition_obj;
    // console.log(condition);
    let userDetails = await userSchemaModel.find(condition);  
    // console.log(userDetails)
    if (userDetails.length != 0) {
    await userSchemaModel.updateOne((req.body.condition_obj), { "$set": (req.body.content_obj) });

        return res.status(200).json({ "msg": "success" });
    }
    else
        return res.status(404).json({ "err": "resource not found" })
}



export var updatePass = async (req, res, next) => {
    let condition = req.body.condition_obj;

    let userDetails = await userSchemaModel.find(condition);
    if (userDetails) {
        await userSchemaModel.updateOne((req.body.condition_obj), { "$set": (req.body.content_obj) });
    }
    else
        return res.status(404).json({ "err": "resource not found" })

}




export var login = async (req, res, next) => {
    let userDetails = req.body;
    userDetails = { ...userDetails, "status": 1 };
    var userlist = await userSchemaModel.find(userDetails);
    if (userlist.length != 0) {

        let payload = { "subject": userlist[0].email };
        let token = jwt.sign(payload, "qwdbqkbdkqwd");
        return res.status(201).json({ "token": token, "userDetails": userlist[0] });
    }
    else
        return res.status(201).json({ "token": "error" })
}