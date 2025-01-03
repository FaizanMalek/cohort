const express= require("express");
const app   = express();
const port = 3000;

app.get('/',(req,res)=> {
    res.send("hello world")
})

app.post('/conversations',(req, res)=>{
    console.log(req.body);

    res.send({
        msg: "2+2=4"
    })
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})