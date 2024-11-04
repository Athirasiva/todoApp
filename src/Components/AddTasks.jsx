import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./TodoApp.css";


const AddTasks = ({setAddTodoResponse}) => {
  const [tasks, setTasks] = useState(" ");
  const [toDo, setTodo] = useState([])
  
  const onSubmit = (e) => {
    e.preventDefault();
     if(!toDo){
     
     }
     else{
      setTodo([...toDo, tasks]);
      console.log(toDo);
      
      localStorage.setItem("tasks", JSON.stringify(toDo));
      setAddTodoResponse(toDo)
       document.getElementById("myId").value = "";
     }
    
    
  }
useEffect(() => {
    
 }, [toDo])

  return (
    <div className="input-section">
      <Form.Control
        id="myId"
        type="text"
        placeholder="What do you have planned ?"
        className="form-control"
        onChange={(e) => setTasks(e.target.value)}
      />
      <button className="btn-add" onClick={(e) => onSubmit(e)}>
        Add
      </button>
    </div>
  );
};

export default AddTasks;
