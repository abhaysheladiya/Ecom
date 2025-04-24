<<<<<<< HEAD
const mongoose= require('mongoose');

//products model
const productSchema= new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
});

=======
const mongoose= require('mongoose');

//products model
const productSchema= new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
});

>>>>>>> 9669d0d89e060b8df387f66988a0bc6325449695
module.exports = mongoose.model("products",productSchema);