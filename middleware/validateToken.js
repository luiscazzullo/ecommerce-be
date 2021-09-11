const jwt = require ("jsonwebtoken")

exports.validateJWT = async (req,res,next) => {
  const token = req.header("x-token")
  if(!token){
    return res.status(401).json({status: "error", message:"token no valido"})
  }
  try {
    const {id} = jwt.verify(token, "palabraSecreta")
    req.userId=id
  } catch (error) {
    return res.status(401).json({status: "error", message:"token no valido"})
  }
  next()
}