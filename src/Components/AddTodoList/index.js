import {useState} from 'react'
import './index.css'

const AddTodo = props => {
  const {todos, setTodos} = props

  const [newTask, setNewTask] = useState('')

  const handleAddTodo = () => {
    if (newTask.trim() === '') {
      return
    }
    const newTodo = {
      id: todos.length + 1,
      title: newTask,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setNewTask('')
  }

  return (
    <div className="container">
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="button" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  )
}

export default AddTodo
