import './App.css';
import Header from './MyComponent/Header';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponent/AddTodo';
import axios from 'axios'; 
import StudentDisplay from './MyComponent/StudentDisplay';

function App() {

    const [students, setstudents] = useState([])
    useEffect(() => {
      async function  getAllStudent(){
        try {
          const students = await axios.get("http://127.0.0.1:8000/studentapi/");
          console.log(students.data);
          setstudents(students.data);

        }
        catch(error) {

          console.log(error)
        }
      }  
      getAllStudent();
    
    },[])
    


  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else if(localStorage.getItem("todos") === undefined) { 
  initTodo = (localStorage.getItem("todos"));
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I'm adding", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    // console.log(myTodo);
    setTodos([...todos, myTodo]);

    localStorage.setItem("todos",JSON.stringify(todos));


  }
// console.log("===================================")
// console.log(initTodo)
const [todos, setTodos] = useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])

  return (
    <>
      

    <StudentDisplay students={students}/>
    
    </>
   
    // <>
    
      // <Header title="My Todos List" serachBar={false} />
    //   <AddTodo addTodo={addTodo} />
    //   <Todos todos={todos} onDelete={onDelete} />
    //   <Footer />
    // </>
  );
}

export default App;
