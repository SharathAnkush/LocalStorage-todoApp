import React from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'
import {FaTrash } from 'react-icons/fa'
import '../App.css'

export default function TodosDp({todos,remove}) {
 return (
        <ListGroup>
             {todos.map(todo => (
                   <ListGroupItem key={todo.id}> {todo.input}
                   <FaTrash onClick={() => remove(todo.id)} className='float-right cursor'></FaTrash> 
                   </ListGroupItem>
              ))}
        </ListGroup>
    )
}
