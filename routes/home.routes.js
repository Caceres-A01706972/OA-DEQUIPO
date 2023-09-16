const express = require("express");
const router = express.Router();

const homeController = require('../controllers/homepage.controller');

router.get("/", homeController.root);

module.exports = router;