import './index.css'

const FilterTodoList = props => {
  const {filterComplete, setFilterComplete} = props

  return (
    <div>
      <label className="filter-container">
        Show Completed Tasks:
        <input
          type="checkbox"
          checked={filterComplete}
          onChange={() => setFilterComplete(!filterComplete)}
        />
      </label>
    </div>
  )
}

export default FilterTodoList
