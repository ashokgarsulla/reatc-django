import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
  return (
    <div className='container'  style={myStyle}>
        <h3 className='text-center bg-info my-5 text-light py-3' >Todos List  </h3>
        {props.students.length === 0 ? "No todo display" : 
         props.students.map((students)=>{
            // return <TodoItem students = {students} key={todo.sno} onDelete={props.onDelete} />
            return <TodoItem students = {students} key={students.sno} onDelete={props.onDelete} />
        })}
        
       
       
    </div>
  )
}
