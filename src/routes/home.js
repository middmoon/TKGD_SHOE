const express = require("express");
const router = express.Router();
const HomeController = require("../controller/home.Controller");

router.use("/", HomeController.index);

module.exports = router;
