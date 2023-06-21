import express from "express";
import * as ProductController from "../controller/product.controller.js";

var router = express.Router();

router.post("/save", ProductController.save);
router.get("/fetch", ProductController.fetch);
// router.delete("/delete", userController.deleteUser);
// router.patch("/update", userController.update);
// router.post("/login", userController.login);

export default router;
