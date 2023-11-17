const express = require("express");
const router = express.Router();
const apiController = require("../controller/api.Controller");

router.use("/collection/:id", apiController.getCollection);
router.use("/product-line/:id", apiController.getProductLine);
router.use("/product/:id", apiController.getProductById);
router.use("/product", apiController.getAllProducts);
router.use("/", apiController.index);

module.exports = router;
