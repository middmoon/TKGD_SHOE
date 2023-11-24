const express = require("express");
const router = express.Router();
const vulcanNewController = require("../controller/vulcan-new.Controller");

router.use("/", vulcanNewController.index);

module.exports = router;