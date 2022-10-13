const express = require("express");

const router = new express.Router();

const visitorController = require("../controllers/visitor")

router.get("/:visitor",visitorController.getVistorCount)

module.exports = router;
