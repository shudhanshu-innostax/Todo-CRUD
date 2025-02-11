import { useState } from 'react';
import './App.css'

function App() {
  const [inputData, setInputData] = useState('');
  const [todoItem, setTodoItem] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputData.trim())
      return;

    if (isEditing) {
      setTodoItem(todoItem.map((item) => item.id === currentTodoId ? { ...item, todo: inputData } : item))
      setIsEditing(false)
      setCurrentTodoId(null)
    } else {
      const newTodo = {
        id: todoItem.length + 1,
        todo: inputData
      }
      setTodoItem([...todoItem, newTodo]);

    }

    setInputData('')

  }

  const deleteTodo = (id) => {
    const removeItem = todoItem.filter((todo) => {
      return todo.id !== id;
    })
    setTodoItem(removeItem)
  }

  const handleEdit = (id) => {
    const todoToEdit = todoItem.find((todo) => todo.id === id)
    setInputData(todoToEdit.todo)
    setIsEditing(true)
    setCurrentTodoId(id);
  }

  return (
    <div className='app'>

      <div className='heading'><h1>TODO CRUD</h1></div>
      <div className='todo-form'>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder='Enter your todo' value={inputData} onChange={(e) => setInputData(e.target.value)} />
          <button type='submit'>{isEditing ? "Update Todo" : "Add Todo"}</button>
        </form>
      </div>
      <div className='todo-list'>
        {
          todoItem.map((item) => (
            <li key={item.id}>{item.todo}
              <div className='list-btn'>
                <button className='edit' onClick={() => handleEdit(item.id)}>Edit</button>
                <button className='delete' onClick={() => deleteTodo(item.id)}>Delete</button>
              </div>
            </li>
          ))
        }
      </div>
    </div>
  )
}

export default App;