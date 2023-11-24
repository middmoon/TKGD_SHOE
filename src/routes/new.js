const express = require("express");
const router = express.Router();
const newController = require("../controller/new.Controller");

router.use("/", newController.index);

module.exports = router;