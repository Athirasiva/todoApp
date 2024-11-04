import { useState } from 'react';
import './App.css';
import AddTasks from './Components/AddTasks';
import Header from './Components/Header';
import ViewTasks from './Components/ViewTasks';

function App() {
  const [addTodoResponse, setAddTodoResponse] = useState("")
  return (
    <div className='App'>
      <Header />
      <AddTasks setAddTodoResponse={setAddTodoResponse}/>
      <ViewTasks addTodoResponse={addTodoResponse}/>
    </div>
  );
}

export default App;
