import express from "express";
import * as BidController from "../controller/bid.controller.js";

var router = express.Router();

router.post("/save", BidController.save);
router.get("/fetch", BidController.fetch);
// router.delete("/delete", userController.deleteUser);
// router.patch("/update", userController.update);
// router.post("/login", userController.login);

export default router;
