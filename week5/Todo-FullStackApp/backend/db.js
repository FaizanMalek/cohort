const mongoose = require("mongoose"); //npm install mongoose
//we use mongoose for validating the data that will be put in the server
mongoose.connect("mongodb+srv://collapse:faizanmalik@cluster0.87xwmol.mongodb.net/todos")
// you would usually put this connection string in .env file and not commit this on github in
//real environment
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    Completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
