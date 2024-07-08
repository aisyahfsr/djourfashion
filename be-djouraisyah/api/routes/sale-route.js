import express from "express";
import { addSales } from "../controllers/sale-controller.js";

const router = express.Router();

router.post("/checkout", addSales);

export default router;
