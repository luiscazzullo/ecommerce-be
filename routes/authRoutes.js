const { Router } = require("express");
const { createUser } = require("../controllers/authController");

const router = Router();

router.route("/register").post(createUser);

module.exports = router;
