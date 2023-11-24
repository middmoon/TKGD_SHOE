const express = require("express");
const router = express.Router();
const vintasNewController = require("../controller/vintas-new.Controller");

router.use("/", vintasNewController.index);

module.exports = router;