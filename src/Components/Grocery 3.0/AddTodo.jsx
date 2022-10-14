

const AddTodo = ({ handleSubmit, newTodo, setNewTodo }) => {
  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <label htmlFor="Add New Todo" className="text-center">Add New Todo</label>
      <input 
        type="text" 
        className="form-control"
        required
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
    </form>
  )
}

export default AddTodo;