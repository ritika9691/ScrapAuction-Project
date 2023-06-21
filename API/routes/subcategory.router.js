import express from "express";
import * as SubCategoryController from "../controller/subcategory.controller.js";

var router = express.Router();

router.post("/save", SubCategoryController.save);
router.get("/fetch", SubCategoryController.fetch);
// router.delete("/delete", userController.deleteUser);
// router.patch("/update", userController.update);
// router.post("/login", userController.login);

export default router;
