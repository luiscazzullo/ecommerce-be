const { Router } = require("express");
const { createUser, login } = require("../controllers/authController");

const router = Router();

router.route("/register").post(createUser);

router.route("/login").post(login)

module.exports = router;
