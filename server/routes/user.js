const express = require("express");
const User = require("../models/user");
const { getUser, setUser } = require("../service/auth");
const {handleUserRegistration, handleUserLogin} = require("../controllers/user");

const router = express.Router();

router.post("/register", handleUserRegistration);

router.post("/login", handleUserLogin);

module.exports = router;
