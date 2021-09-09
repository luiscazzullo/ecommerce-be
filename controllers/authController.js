const User = require("../model/User");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ status: "error", message: "Bad request" });
    }
    user = new User(req.body);
    const salt = await bcrypt.genSalt(5);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    return res
      .status(201)
      .json({ status: "seccess", message: "usuario creado", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "failed", message: "Algo salio mal" });
  }
};
