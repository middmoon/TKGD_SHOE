const express = require("express");
const router = express.Router();
const ProductDetailController = require("../controller/product-detail.Controller");

router.use("/", ProductDetailController.index);

module.exports = router;
