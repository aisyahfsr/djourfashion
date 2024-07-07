const express = require("express");
// const router = express.Router();
const Checkout = require("../model/checkOut");
// Routing ke halaman Home
// router.post('/checkout', (req, res) => {
//   res.send('pesanan telah masuk');
// });
async function checkout(req, res) {
  console.log(req.body);
  try {
    const checkout = await Checkout.create(req.body);
    res.json({
      success: true,
      checkout,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}

module.exports = checkout;
