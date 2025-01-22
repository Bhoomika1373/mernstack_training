const express = require("express");
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(express.json())
app.use(cors())
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017")
.then(()=>{console.log("connected to db");})
.catch(()=>{console.log("notconnected to db");})
// const myschema=mongoose.Schema({
//      user:String
//      })
// const user=mongoose.model("user",myschema)
 app.post("/",(req,res)=>{
//     const username=req.body.user
//     const response= user.findOne({user:user})
//     if(response){
    res.json({success:true})
 
 })
    

app.listen(3000,()=>{
    console.log("Server started");
})