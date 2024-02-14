import React from 'react'
import "./Style.css"

const InputField:React.FC = () => {
  return (
    <form className='input'>
        <input type='input' placeholder='Enter a Task' className='input_box' />
        <button className='input_submit' type='submit' >Go</button>
    </form>
  )
}

export default InputField