const mongoose= require('mongoose');

//products model
const productSchema= new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
});

module.exports = mongoose.model("products",productSchema);