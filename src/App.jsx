import { useState } from 'react';
import './App.css'

function App() {
  const [inputData, setInputData] = useState('');
  const [todoItem, setTodoItem] = useState([]);  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputData !== '') {
      const newTodo = {
        id: todoItem.length + 1,
        todo: inputData
      }
      setTodoItem([...todoItem, newTodo]);
      setInputData('')
    }

  }

  const deleteTodo = (id) => {
    const removeItem = todoItem.filter((todo)=> {
      return todo.id !== id;
    })
    setTodoItem(removeItem)
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
          todoItem.map((item) => (
            <li key={item.id}>{item.todo}
              <div className='list-btn'>
              <button className='edit'>Edit</button> 
              <button className='delete' onClick={()=>deleteTodo(item.id)}>Delete</button>
              </div>
            </li>
          ))
        }
      </div>
    </div>
  )
}

export default App;