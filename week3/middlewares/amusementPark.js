const express=require("express");
const app = express();

// function isOldEnough(age) {
//     if (age>=14) return true;
//     return false;
// }

function isOldEnoughMiddleware(req,res,next) {
    const age = req.query.age;
    if (age>=14) next();
    else res.status(411).json({
        msg: "sorry you are not of age yet"
    })
}

app.get("/ride1",isOldEnoughMiddleware, (req,res)=>{
    res.status(200).json({
        msg: "You have successfully ridden ride 1"
    })
    
})

app.listen(3000);