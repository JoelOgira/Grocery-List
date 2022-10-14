

const SearchTodo = ({ search, setSearch }) => {
  return (
    <form className="todo-search-form" onSubmit={e => e.preventDefault()}>
        <label htmlFor="Search Todos" className="todo-label">Search Todos</label>
        <input 
            type="text" 
            placeholder="Search an activity"
            className="form-control"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchTodo