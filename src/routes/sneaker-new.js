const express = require("express");
const router = express.Router();
const sneakerNewController = require("../controller/sneaker-new.Controller");

router.use("/", sneakerNewController.index);

module.exports = router;