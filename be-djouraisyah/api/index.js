import express from "express";
import "dotenv/config";
import cors from "cors";

import UserRoute from "./routes/user-route.js";
import CartRoute from "./routes/cart-route.js";
import SaleRoute from "./routes/sale-route.js";

const app = express();

app.use(cors());

app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.use("/user", UserRoute);
router.use("/cart", CartRoute);
router.use("/sale", SaleRoute);

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
