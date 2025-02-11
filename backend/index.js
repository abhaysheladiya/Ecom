const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product")

const jwt =require('jsonwebtoken');
const jwtkey='e-comm';

const app = express();

app.use(express.json());
app.use(cors());

//API for registration
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password      //not show password in url

  jwt.sign({result}, jwtkey, {expiresIn: "2h" },(err,token)=>{
    if(err){
      resp.send({ result: "something went wrong please try after a seconds "});
    }
      resp.send({result, auth: token})
  })
});

// API for login the user after completing registration
app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password"); //'-password' it means remove/notShow password
    if (user) {
      jwt.sign({user},jwtkey,{expiresIn: "2h" },(err,token)=>{
        if(err){
          resp.send({ result: "something went wrong please try after a seconds "});
        }
          resp.send({user, auth: token})
      })
    } else {
      resp.send({ result: "No user found" });
    }
    resp.send(user);
  }
});

//API to add product
app.post("/add-products",async (req,resp)=>{
  let product = new Product(req.body); //Create a new product using request body data
  let result = await product.save();// Save product to the database
  resp.send(result);// Send back the saved product
});

//API to fetch Products
app.get("/products", async(req,resp)=>{
  let products = await Product.find();
  if(products.length>0){
    resp.send(products);
  }else{
    resp.send({result:"No product found"})
  }
});

//API for deleting the record
app.delete("/product/:id", async(req,resp)=>{
    const result =await Product.deleteOne({_id:req.params.id});
    resp.send(result);
});

//API for updating or viewing the record
app.get("/product/:id", async (req,resp)=>{
  let result = await Product.findOne({_id:req.params.id});
  if(result){
    resp.send(result)
  }else{
    resp.send({ result: "No Record Found"});
  }
});

//API for updating the data
app.put("/product/:id", async (req,resp)=>{
  let result = await Product.updateOne(
    {_id: req.params.id},
    {
      $set : req.body
    }
  )
  resp.send(result)
});

//API for searching product
app.get("/search/:key", async (req,resp)=>{
  let result =await Product.find({
    "$or":[
      {name: {$regex: req.params.key}},
      {company: {$regex: req.params.key}},
      {category: {$regex: req.params.key}}
    ]
  })
})

app.listen(5000);
