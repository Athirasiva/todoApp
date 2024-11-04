import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function ViewTasks({addTodoResponse}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getLocalItems();
  }, [addTodoResponse]);

  const getLocalItems = () => {
    const list = JSON.parse(localStorage.getItem("tasks"));
    if (list) {
      setData(list);
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  };
  
  const deleteItems = (list) =>{
 localStorage.removeItem(list)
  }
  return (
    <div className="list-group">
      <h4>Tasks</h4>
      <ListGroup>
        {data.length > 0
          ? data.map((list, index) => (
              <ListGroup.Item className="list" key={index}>
                {list}
                <Button onClick={()=>deleteItems(list)} style={{ float: "right" }} className="btn-delete">
                <i
                  class="fa-solid fa-trash"
                  
                  
                ></i>
                </Button>
                
              </ListGroup.Item>
            ))
          : " No Data Found"}
      </ListGroup>
    </div>
  );
}

export default ViewTasks;
