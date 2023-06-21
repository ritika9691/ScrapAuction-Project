import express from "express";
import * as userController from "../controller/user.controller.js";

var router = express.Router();

router.post("/save", userController.save);
// router.get("/fetchUser", userController.fetchUser);
router.get("/fetch", userController.fetch);
router.delete("/delete", userController.deleteUser);
router.patch("/update", userController.update);
router.patch("/updatePassword", userController.updatePass);
router.post("/login", userController.login);

export default router;
