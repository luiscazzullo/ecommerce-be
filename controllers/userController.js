const User = require("../model/User");

exports.getUsers = async (req, res) => {
  try {
    const search = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const users = await User.find({ ...search });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ status: "failed", message: "Algo salio mal" });
  }
};
