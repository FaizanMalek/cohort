// write basic express boilerplate code
// with express.json() middleware

const express = require('express');
const app = express();
app.use(express.json())
const {createTodo, updateTodo} = require("./types.js")


// body {  
//     title : string,
//     description : string;
// } u would expect this from the user and so u need to validate this using Zod.
//  Make a types.js file and add Zod logic
app.post('/todo', (req,res)=> {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
})

app.get('/todos', (req,res) => {
    
})

app.put("/completed", (req,res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(completeId);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }
})



app.listen(3000, () => {
    console.log("Listening on port 3000");
    
})