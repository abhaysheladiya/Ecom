<<<<<<< HEAD
const mongoose= require('mongoose');

//user models
const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

=======
const mongoose= require('mongoose');

//user models
const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

>>>>>>> 9669d0d89e060b8df387f66988a0bc6325449695
module.exports = mongoose.model("users",userSchema);