const express=require("express");
const app=express();

const users=[{
    name: "john",
    kidneys:[{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/", function (req,res) {
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=johnKidneys.length;
    let numberofHealthyKidneys = 0;
    for(let i =0;i<johnKidneys.length;i++)
    {
        if(johnKidneys[i].healthy) numberofHealthyKidneys++;
    }
    let numberofUnHealthyKidneys = 0;
    for(let i =0;i<johnKidneys.length;i++)
    {
        if(!johnKidneys[i].healthy) numberofUnHealthyKidneys++;
    }

    res.json({
        
        numberOfKidneys,
        numberofHealthyKidneys,
        numberofUnHealthyKidneys
    });
    console.log(numberOfKidneys);
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res) {
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy=true
    }
    res.json({
        msg: "All Kidneys are now healthy"
    })
})

app.delete("/",function (req,res) {
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy) newKidneys.push({
            healthy: true
        })
    }
    users[0].kidneys=newKidneys;
    res.json({
        msg: "Deleted"
    })
})


app.listen(3000);