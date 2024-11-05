import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./TodoApp.css";
import { v4 as uuidv4 } from 'uuid';

const AddTasks = () => {
  const [tasks, setTasks] = useState(" ");
  const [toDo, setTodo] = useState([
    {
      id:"",
      task:""

    }
  ])
  

  const onSubmit = (e) => {
    e.preventDefault();
     if(!tasks){
      alert("Enter A task")
     }
     else{
    
      toDo.push({id:uuidv4(),task:tasks})
      console.log(toDo);
      localStorage.setItem("tasks", JSON.stringify(toDo));
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
