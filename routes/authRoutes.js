const { Router } = require("express");
const { createUser, login, renewToken } = require("../controllers/authController");
const {validateJWT} = require ("../middleware/validateToken")

const router = Router();

router.route("/register").post(createUser);

router.route("/login").post(login)

router.route("/renew").get(validateJWT, renewToken)

module.exports = router;
