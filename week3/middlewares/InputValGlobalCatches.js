const express= require ("express");
const app=express();

app.use(express.json());

app.post("/health-checkup",(req,res)=>{
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    res.send("your have kidneys  = " + kidneyLength);
})

app.use((err,req,res,next)=>
{
    res.json({
        msg : "sorry something went wrong"
    })
})

app.listen(3000);