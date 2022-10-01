import React from 'react'

export default function Student({student}) {
  return (
    
    <>
    
    <div className='bg-info text-light fs-1 text-uppercase py-2 '>
        <div className="container d-inline float-left  ">
        {student.name} 
        </div>
        <div className="container d-inline ">{student.city}</div>
      
    </div>
    <hr />
   
  </>
  )
}
