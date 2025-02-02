//hook
import {useState} from "react";
//state, components


//jsx

// todo app
//todo
// {
//   todos: [{title: "todo1", description: "First Todo, completed: false,"}]
// }

function App() {
const [todos, setTodos] = useState([{
  title: "go to gym",
  description :  "Go to gym from 7-9",
  completed: false, 
},{
  title: "study DSA",
  description :  "study from 9-10",
  completed: true, 
},{
  title: "study DSA",
  description :  "study from 9-10",
  completed: true, 
},{
  title: "study DSA",
  description :  "study from 9-10",
  completed: true, 
}]);
 
  return (
    
    <div>
      <button onClick={()=> setTodos([...todos, {
        title: "study DSAasdasdasd",
        description :  "study from 9-12312310" 
      }])}>Add A  random todo</button>

      {/* <Todo title = {todos[0].title} description = {todos[0].description}></Todo>
      <Todo title = {todos[1].title} description = {todos[1].description}></Todo> */}
      
      {/* {todos.map((todo) => (<Todo title = {todo.title} description = {todo.description}></Todo>))}
       */}
        {todos.map(function(todo) {
          return <Todo title = {todo.title} description = {todo.description}></Todo>
        })}
      </div>   
    
    
  )
}

//component
// todo App, {
//   title,
//   description,
//   completed
// }
function Todo(props) {
  // code has to be on same line as return statemtnt
  return <div> 
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    

  </div>
 
}


export default App
