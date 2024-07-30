const zod = require("zod");
const {credential_schema} = require('./validation.js');


const validate = (req, res,next) =>{
  const payload = req.body;
  const check_payload = credential_schema.safeParse(payload);
  
  if(!check_payload.success){
    res.status(401).json({
      msg : "Invalid Credentials"
    })
    console.log(payload)
  }
  else{
    next();
  }
}

module.exports = {validate};