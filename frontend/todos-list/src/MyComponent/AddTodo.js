import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc) {
            alert("Title or Description canot be empty")
        }
        else {
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
    
        }

    }

  return (
    <div className='container'>
    <form onSubmit={submit} >
    <div className="form-group">
      <label htmlFor="title">Todo Title</label>
      <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter todo title"/>
    </div>
    <div className="form-group">
      <label htmlFor="desc">Desc</label>
      <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="desc"/>
    </div>
    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
  </form>
  </div>
  )
}
