const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://anitwork21:anit2193@cluster0.dz0p3zt.mongodb.net/");

  const schema = mongoose.Schema({
  username : String,
  password : String,
  item : {type : String, default : "empty"}
  })

  const database = mongoose.model('database', schema);

  module.exports = {database};
  