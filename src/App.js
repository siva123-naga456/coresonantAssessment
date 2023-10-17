import {useState, useEffect} from 'react'
import TodoList from './Components/TodoList'
import AddTodoList from './Components/AddTodoList'
import FilterTodoList from './Components/FilterTodoList'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [filterComplete, setFilterComplete] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
  }, [])

  return (
    <div>
      <h1 className="heading">Todo App</h1>
      <AddTodoList todos={todos} setTodos={setTodos} />
      <FilterTodoList
        filterComplete={filterComplete}
        setFilterComplete={setFilterComplete}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterComplete={filterComplete}
      />
    </div>
  )
}

export default App
