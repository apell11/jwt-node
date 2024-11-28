const express = require("express");
const SignupController = require("../controller/Signup");

const router = express.Router();

router.post("/register", SignupController. createUser);

module.exports = router;