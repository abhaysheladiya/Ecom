const mongoose= require('mongoose');

//user models
const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model("users",userSchema);