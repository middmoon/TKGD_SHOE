const express = require("express");
const router = express.Router();
const ProductListController = require("../controller/product-list.Controller");

router.use("/", ProductListController.index);

module.exports = router;
