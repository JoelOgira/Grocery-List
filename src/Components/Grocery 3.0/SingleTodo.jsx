import { FaTrashAlt } from "react-icons/fa";
const SingleTodo = ({ todos, handleDelete }) => {
  return (
    <main>
        {todos.map(todo => 
            <li className="list-group-item my-2" key={todo.id}>
                <input type="checkbox" className="form-check-input mx-2" style={{border: '1px solid black'}}/>
                <label className="form-check-label">{todo.todo}</label>
                <FaTrashAlt role="button" className="mt-1" style={{float: 'right' }} onClick={() => handleDelete(todo.id)}/>
            </li>
        )}
    </main>
  )
}

export default SingleTodo;