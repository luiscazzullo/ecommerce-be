const User = require("../model/User");
const bcrypt = require("bcryptjs");
const {generateJWT} = require ("../helpers/token")

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ status: "error", message: "Bad request" });
    }
    user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    return res
      .status(201)
      .json({ status: "seccess", message: "usuario creado", user });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "Algo salio mal" });
  }
};


exports.login = async (req,res)=>{
  const{email,password} = req.body
  try {
    const user = await User.findOne({email})
    if(!user){
      return res.status(400).json({status: "error", message:"usuario no valido"})
    }
    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword){
      return res.status(400).json({status: "error", message: "usuario no valido"})
    }
    const token = await generateJWT(user._id)
    return res.status(200).json({status: "success", user,token})
  } catch (error) {
    res.status(500).json({status:"failed", message:"Algo salio mal"})
  }
}