import { useState } from 'react';
import './App.css';
import AddTasks from './Components/AddTasks';
import Header from './Components/Header';
import ViewTasks from './Components/ViewTasks';

function App() {
  // const [addTodoResponse, setAddTodoResponse] = useState("")
  return (
    <div className='App'>
      <Header />
      <AddTasks/>
      // <ViewTasks />
    </div>
  );
}

export default App;
