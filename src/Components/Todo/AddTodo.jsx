const AddTodo = ({ handleSubmit, newTodo, setNewTodo }) => {
  return (
    <form className="add-todo-form" style={{width: '100%'}} onSubmit={handleSubmit}>
      <label htmlFor="Add New Todo" className="add-todo-label">Add New Todo</label>
      <p className="text-center" style={{color: 'white', padding: '0', margin: '0'}}>Add New Todo</p>
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