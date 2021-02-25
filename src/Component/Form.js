import React, { useState } from 'react'
import {v4} from 'uuid'
import {Form,FormGroup,Input,InputGroup,Button} from 'reactstrap'

export default function TodoForm({addTodo}) {
    const [input , setInput] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
          const todo = {
                input, 
                id : v4()
          }
          addTodo(todo);
          setInput('')
    }
    return (
          
            <Form onSubmit={handleSubmit} className='m-4' >
                <FormGroup>
                     <InputGroup>
                     <Input  value={input}  onChange={e => setInput(e.target.value)} type='text' placeholder='Enter Your Todo'/>
                     <Button className='btn-warning'>Add</Button>
                     </InputGroup>
                </FormGroup>
            </Form>
          
        
    )
}



