import express from "express";
import * as CategoryController from "../controller/category.controller.js";

var router = express.Router();

router.post("/save", CategoryController.save);
router.get("/fetch", CategoryController.fetch);
// router.delete("/delete", userController.deleteUser);
// router.patch("/update", userController.update);
// router.post("/login", userController.login);

export default router;
