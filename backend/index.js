const express = require("express");
const app = express();
const {validate} = require("./middlewares.js");
const {database} = require("./database.js");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.post('/signup', validate, async function(req,res){
  const credentials = req.body;
  const exists = await database.exists({username : credentials.username});

  if(!exists){
    await database.create({
      username : credentials.username,
      password : credentials.password
    })
  

  res.status(200).json({
    msg : "User Added"
  })
 }
 else{
  res.json({msg : "User already exists"});
 }
})

app.get('/login', validate, async function(req, res){
  const credentials = req.body;
  const user = await database.find({
    username : credentials.username,
    password : credentials.password
  })

  if(user.length!=0){
    var token = jwt.sign({username : credentials.username}, jwtPassword);
    res.status(200).json({
      token,
      msg : "Login Successful!"
    })

  }
  else{
    res.status(401).json({
      msg : "Invalid Credentials!" 
    })
  }
})

app.put('/details',async function(req, res){
  const token = req.headers.authorization;
  console.log(token);
  try{
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const item = req.body.item;
    
    await database.findOneAndUpdate({username : username},{item : item});
    res.status(200).json({
      msg : "done"
    })

  }catch(err){
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
})

app.listen(3000);
