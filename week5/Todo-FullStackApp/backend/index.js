// write basic express boilerplate code
// with express.json() middleware

const express = require('express');
const app = express();
app.use(express.json())
const {createTodo, updateTodo} = require("./types.js");
const { todo } = require('./db.js');


// body {  
//     title : string,
//     description : string;
// } u would expect this from the user and so u need to validate this using Zod.
//  Make a types.js file and add Zod logic
app.post('/todo', async (req,res)=> {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "Todo created"
    })
})

app.get('/todos', async (req,res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async (req,res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    await todo.update({ //update takes 2 arguments : first what are your conditions
    // what do you want to update (we want to update something that has _id = req.body.id)
    //second how you want to update it.
        _id : req.body.id
    }, {
        completed : true
    });

    res.json({
        msg : "Todo marked as complete"
    })
})



app.listen(3000, () => {
    console.log("Listening on port 3000");
    
})