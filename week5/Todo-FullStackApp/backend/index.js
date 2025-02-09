// write basic express boilerplate code
// with express.json() middleware

const express = require('express');
const app = express();
app.use(express.json())


// body {  
//     title : string,
//     description : string;
// } u would expect this from the user and so u need to validate this using Zod.
//  Make a types.js file and add Zod logic
app.post('/todo', (req,res)=> {

})

app.get('/todos', (req,res) => {
    
})

app.put("/completed", (req,res) => {

})



app.listen(3000, () => {
    console.log("Listening on port 3000");
    
})