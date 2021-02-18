import React ,{useState,useEffect} from 'react';
import './App.css';
import TodoForm from './Component/Form'
import TodosDp from './Component/TodosDp'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";


function App() {
   const [todos , setTodos] = useState([])
   
   // Get Todos from local Storage
   useEffect(() => {
     const local = localStorage.getItem('todos')
     if(local){
       setTodos(JSON.parse(local))
     }
   },[])

    //Add todo 
   const AddTodo = async todo => {
     setTodos([...todos, todo ])
   }

   // Set the Todo to local Storage , useing useEffect
   useEffect( () => {
     localStorage.setItem('todos',JSON.stringify(todos))
   },[todos])

  // Remove Todo
  const Remove = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container>
     <h3>Todo App</h3>
      <TodosDp todos={todos} remove={Remove} />
      <TodoForm addTodo={AddTodo}/>
    </Container>
  );
}

export default App;







