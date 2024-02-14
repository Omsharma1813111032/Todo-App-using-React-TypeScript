import React from 'react'
import "./Style.css"
import { Todo } from '../model'

interface Props{
    todos:Todo,
    setTodos:React.Dispatch<React.SetStateAction<Todo>>
}

const TodoList = ({todos,setTodos}:Props) => {
  return (
    <div className='todos'>
        {todos.map((dt)=>(       
            <div>     
                <li>
                    {dt.todo}
                    {dt.id}
                </li>
            </div>
       ))}
    </div>
  )
}

export default TodoList