const jwt = require ("jsonwebtoken")

exports.generateJWT = (id) => {
  return new Promise ((resolve, reject)=> {
    const payload = {id}
    jwt.sign(payload, "palabraSecreta", {expiresIn: "2h"},(err,token)=>{
      if(err){
        reject("No se genero el token")
      }
      resolve(token)
    })
  })
}