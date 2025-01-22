// const fs = require("fs");
// const userdata={
//  "user":"bhoomi",
//  "password":1234
// };
// //fs.writeFile("./a.txt",`${user}${paawosrd}`,
// (err)=>{
//     console.log("success")
// })
// fs.writeFile("./a.txt",JSON.stringify(userdata),

// fs.readFile("./a.txt","UTF-8",
//     (err,data)=>{
//         if(err){
//             console.error(err);
//         }
//         else
//         console.log(data)
//     })
const express = require("express");
const app = express();
const cors=require("cors");
app.use(express.json());//built in middleware//app.get(path,callback)
app.use(cors());
// app.set("view engine","ejs")
// app.use(express.static('public'));
// app.get("/",(req,res)=>{
// res.render("home")
// })
// app.get("/pages",(req,res)=>{
//     // const name=req.query.username;
//     // const email=req.username.email;
//     const {username,email}=req.query;
//     res.send(`${username} and ${email}`)
// })
// // app.get("/login",(req,res)=>{
// //     res.send("logged in successfully")
// // })
// // app.get("/Signup",(req,res)=>{
// //     res.send("Signup successful")
// // })
// // app.get("/photos",(req,res)=>{
// //     res.send("photos session reached successfully")
// // })
// app.post("/headers",(req,res)=>{
//     const token=req.headers.token
//     res.send(`${token}`)
// })
// app.post("/body", (req, res) => {
//     const filePath = "./a.txt";

//     // Write the body to the file
//     fs.writeFile(filePath, JSON.stringify(req.body), (err) => {
//         if (err) {
//             console.error("Error writing to file:", err);
//             return res.status(500).send("Internal server error");
//         }

//         console.log("Write successful");

//         // Read the file to verify the content
//         fs.readFile(filePath, "UTF-8", (readErr, data) => {
//             if (readErr) {
//                 console.error("Error reading file:", readErr);
//                 return res.status(500).send("Internal server error");
//             }

//             // Parse the file content back to an object
//             const fileContent = JSON.parse(data);

//             // Compare the content
//             if (JSON.stringify(req.body) === JSON.stringify(fileContent)) {
//                 console.log("Success");
//                 return res.send("Success");
//             } else {
//                 console.log("Unsuccessful");
//                 return res.status(401).send("Unauthorized");
//             }
//         });
//     });
// });

// Start server (example port)

// app.put("/msg",(req,res)=>{
//     res.send("added the message")
// })
// app.delete("/msg",(req,res)=>{
//     res.send("deleted successfully")
// })
// function samplemiddleware(req, res, next) {
//     const name = req.body.name;
//     if (name === "bhoomi") {
//         next()
//     }
//     else {
//         res.send("something went wrong");
//     }
// }
// function middlewareIPAddress(req, res, next) {
//     const ip = parseInt(req.headers.add);
//     if (ip === 23) {
//         next()
//     }
//     else {
//         res.send("something went wrong");
//     }
// }
// app.post("/body", samplemiddleware, middlewareIPAddress, (req, res) => {
//     res.send("success in user route")
// });
// app.put("/a", samplemiddleware, middlewareIPAddress, (req, res) => {
//     res.send("success in user route")
// });
// app.delete("/b", samplemiddleware, middlewareIPAddress, (req, res) => {
//     res.send("success in user route")
// });
//  const mongoose=require("mongoose");
//  mongoose.connect("mongodb://localhost:27017")
// .then(()=>{console.log("connected to db");})
// .catch(()=>{console.log("notconnected to db");})
// const myschema=mongoose.Schema({
//      random:Number 
//      })
//   email:{type:String,required:true}
// })
// const user=mongoose.model("user",myschema)
// app.post("/",(req,res)=>{
//     const username=req.body.username;
//     const email=req.body.email;
//     const details={
//           user:username,
//           email:email
//     }
//     const userdetails=new user(details)
//     userdetails.save()
//     .then(()=>{res.send("success");})
//     .catch(()=>{res.send("somethiing went wrong");})
// })

// app.post("/sample",(req,res)=>{
//     const random=req.body.randomno
//     const details={
//         random:random
//     }
//     const userdetails=new user(details)
//     userdetails.save()
//     .then(()=>{res.send("success");})
//     .catch(()=>{res.send("something went wrong");})
// })
// app.get("/",(req,res)=>{
//     res.send("hello from backend")
//  })
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });

const mongoose=require("mongoose");

const jwt=require("jsonwebtoken")

app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://localhost:27017/")
// .then(()=>(console.log("db connected")))
// .catch(()=>(console.log("db not connected")))


// const mySchema=mongoose.Schema({
//     name:String,
//     pwd:String
// })
// const user=mongoose.model("user",mySchema);


// app.post("/",(req,res)=>{
//     const name=req.body.name;
//     const pwd=req.body.pwd;
//     const skey="anusha121";
//     const token=jwt.sign(name,skey)
//    const details={
//     name:name,
//     pwd:token
//    }
//     const userdetails=new user(details)
//     userdetails.save()
//     .then(()=>{res.send("success")})
//     .catch(()=>{res.send("wrong")})
// })

app.listen(3000,()=>{
    console.log("Server started");
})
