const express= require("express");
const app = express();
app.use(express.json());

const jwt= require("jsonwebtoken");
const jwtPassword = "123456";

const ALL_USERS=[{
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
},
{
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
},
{
    username: "priya@gmail.com",
    password: "123321",
    name: "priya kumari",
},
];

function userExists(username, password){
    for(let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password) return true;
        return false;
            
    }
}

app.post("/signin", function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExists(username, password)){
        res.status(404).json({
            msg: "user doesnt exist in our db",
        });
        return;
    }
 var token = jwt.sign({username:username}, jwtPassword);
 return res.send({
    token,
 })
})

app.get("/users", (req,res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username= decoded.username;
        res.json(ALL_USERS.filter(i=>i.username!=username));
        
    } catch(err) {
        return res.status(404).json({
            msg: "Invalid token",
        })
    }
})




app.listen(3000);