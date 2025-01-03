const express= require("express");
const app = express();

function kidneyMiddleware(req,res,next) {
    const kidneyId = req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2)
    {
        res.status(404).json({msg: "something wrong with your kidney inputs"});
        return;
    }
    next();
}

function userMiddleware(req,res,next) {
    const user = req.headers.user;
    const pass = req.headers.pass;
    if(user!="user" || pass!="pass")
    {
        res.status(404).json({msg:" something wrong with your user pass"});
        return;
    }
    next();
}

app.use(userMiddleware);
app.use(express.json());

app.get("/health-checkup",kidneyMiddleware,(req,res)=>{
    res.send("you are healthy");
})

app.get("/kidney-check", kidneyMiddleware,(req,res)=>{
    res.send("your kidneys are healthy");
})

app.get("/heart-check", (req,res)=>{
    res.send("your heart is healthy");
})


app.listen(3000);