import './index.css'

const TodoList = props => {
  const {todos, setTodos, filterComplete} = props

  const handleToggleComplete = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    setTodos(updatedTodos)
  }

  const handleEditTodo = (id, newTitle) => {
    if (newTitle.trim() === '') return
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, title: newTitle} : todo,
    )
    setTodos(updatedTodos)
  }

  const handleDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <ul>
      {todos
        .filter(todo => (!filterComplete ? true : todo.completed))
        .map(todo => (
          <li key={todo.id} className="list-container">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            {todo.completed ? (
              <p className="color-change">{todo.title}</p>
            ) : (
              <p>{todo.title}</p>
            )}

            <button
              type="button"
              className="Edit-button"
              onClick={() => handleEditTodo(todo.id)}
            >
              Edit
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  )
}

export default TodoList
