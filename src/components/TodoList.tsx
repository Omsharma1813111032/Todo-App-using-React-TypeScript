import React from 'react'
import "./Style.css"
import { Todo } from '../model'
import { MdDelete,MdOutlineDone } from "react-icons/md";

interface Props{
    todos:Todo,
    setTodos:React.Dispatch<React.SetStateAction<Todo>>
}


const handleDelete = (e: React.MouseEvent<SVGElement, MouseEvent>,id:number, setTodos:React.Dispatch<React.SetStateAction<Todo>>,todos:Todo) =>{
    e.preventDefault()
    setTodos(todos.filter((todo) => todo.id !== id))
}



const TodoList = ({todos,setTodos}:Props) => {
  return (
    <div className='todos'>
        {
            todos.length > 0 ? todos.map((dt:Todo)=>(       
                <div className='li_wrapper'>     
                    <li key={dt.id} >
                        {dt.todo}
                        <div className='todos_action'>
                            <MdDelete onClick={(e)=>{handleDelete(e,dt.id,setTodos,todos)}} className='delete_icon' />
                        </div>
                    </li>
                </div>
           ))
           : "Add new task!!"
        }
        
    </div>
  )
}

export default TodoList