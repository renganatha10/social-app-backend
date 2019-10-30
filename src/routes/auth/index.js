const express = require("express");
const { generateToken } = require("../../controllers/auth");

const router = express.Router();

router.get("/generateToken/:id", generateToken);

module.exports = router;
