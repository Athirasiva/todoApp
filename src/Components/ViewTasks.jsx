import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function ViewTasks() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getLocalItems();
  }, [data]);

  const getLocalItems = () => {
    const list = JSON.parse(localStorage.getItem("tasks"));
    if (list) {
      setData(list.filter(o => Object.values(o).some(v => v !== "")));
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  };
  
  
  const deleteItems = (index) =>{
    data.splice(index, 1); // removes the item from watchList based on the index
    localStorage.setItem('tasks', JSON.stringify(data)); 
//  localStorage.removeItem({id:id})
  }
  return (
    <div className="list-group">
      <h4>Tasks</h4>
      <ListGroup>
        {data.length > 0
          ?
          data.map((list, index) => (
              <ListGroup.Item className="list" key={index}>
                {list.task}
                <Button onClick={()=>deleteItems(index)} style={{ float: "right" }} className="btn-delete">
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
