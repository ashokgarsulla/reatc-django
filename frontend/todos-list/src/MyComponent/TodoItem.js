import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='my-3 '>
      <h4>{todo.title}</h4>
      <h6>{todo.desc}</h6>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <hr />
    </div>
  )
}
