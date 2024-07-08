import express from "express";
import {
  addToCart,
  deleteCart,
  getCartByIdCustomer,
  updateCart,
} from "../controllers/cart-controller.js";

const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/get-cart/:id", getCartByIdCustomer);
router.put("/update-quantity/:id", updateCart);
router.delete("/delete-item/:id", deleteCart);

export default router;
