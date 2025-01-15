const express= require("express");
const jwt= require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect("mongodb+srv://collapse:password@cluster0.87xwmol.mongodb.net/");

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
});

const app = express();
app.use(express.json());

app.post("/signup", async (req,res)=>{
    const name=req.body.name;
    const email=req.body.username;
    const password=req.body.password;

    const existingUser = await findOne({email: username});
    
    if(existingUser) return res.status(400).json({ msg: "User already exists"});
    const user = new user ({
        name: name,
        email: email,
        password:password,
    });

    await user.save();
    res.json({
        msg: "User created successfully",
    });
})

// app.post("/signin", function(req,res){
//     const username=req.body.username;
//     const password=req.body.password;
//     if(!userExists(username, password)){
//         res.status(404).json({
//             msg: "user doesnt exist in our db",
//         });
//         return;
//     }
//  var token = jwt.sign({username:username}, jwtPassword);
//  return res.send({
//     token,
//  })
// })

// app.get("/users", (req,res)=>{
//     const token = req.headers.authorization;
//     try{
//         const decoded = jwt.verify(token, jwtPassword);
//         const username= decoded.username;
//         res.json(ALL_USERS.filter(i=>i.username!=username));
        
//     } catch(err) {
//         return res.status(404).json({
//             msg: "Invalid token",
//         })
//     }
// })




app.listen(3000);