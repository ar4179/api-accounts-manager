const express = require("express");
const cronController = require("./../controllers/cronController");
const router = express.Router();

router.route("/").get(cronController.getCron);

module.exports = router;
