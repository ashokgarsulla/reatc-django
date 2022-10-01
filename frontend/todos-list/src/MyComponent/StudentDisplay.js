import React from 'react'
import Student from './Student'

export default function StudentDisplay(props) {
  return (
    <div className="App">
    <h1 className='bg-success py-5 text-light display-1 text-uppercase'>Student Display</h1>
    
    {
      props.students.map((student, i)=>{
        return (
          <>
                
          <Student student = {student} />     
        </>
          
        )
      })
    }
   </div>
  )
}
