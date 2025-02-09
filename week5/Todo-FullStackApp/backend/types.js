const zod = require("zod"); //npm install zod

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo,
    updateTodo
}