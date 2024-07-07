import express from "express";
import { getAllUser, registerAccount } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/get-all", getAllUser);
router.post("/register", registerAccount);

export default router;
