import { useState } from 'react';
import './App.css'

function App() {
  const [inputData, setInputData] = useState('');
  const [todoItem, setTodoItem] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputData !== '') {
      setTodoItem([...todoItem, inputData]);
      setInputData('')
    }

  }

  return (
    <div className='app'>
      <div className='heading'><h1>TODO CRUD</h1></div>
      <div className='todo-form'>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
      <div className='todo-list'>
        {
          todoItem.map((item,index) => (
            <h2 key={index}>{item}</h2>
          ))
        }
      </div>
    </div>
  )
}

export default App;