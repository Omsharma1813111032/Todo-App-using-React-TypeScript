import React, { useState } from 'react'
import "./Style.css"
import { Todo } from '../model';

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
}

const InputField:({ todo, setTodo}: Props) => JSX.Element= ({todo,setTodo}:Props) => {

  const [todos,setTodos] = useState<Todo>([])

  const handleAdd = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("")
    }
  }
  
  console.log(todos)

  return (
    <form className='input' onSubmit={(e)=>{handleAdd(e)}} >
        <input type='input' placeholder='Enter a Task' value={todo} onChange={(e)=>{setTodo(e.target.value)}} className='input_box'/>
        <button className='input_submit' type='submit' >Go</button>
    </form>
  )
}

export default InputField