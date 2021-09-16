const { Router } = require("express");
const { getUsers } = require("../controllers/userController");

const router = Router();

router.route("/").get(getUsers);

module.exports = router;
