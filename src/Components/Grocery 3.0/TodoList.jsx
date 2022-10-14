import SingleTodo from "./SingleTodo"

const TodoList = ({todos, handleDelete}) => {
  return (
    <ul className="list-group">
        { todos.length ? (
            <SingleTodo todos={todos} handleDelete={handleDelete}/>
        ) : (
            <p className="text-center my-4">
                The Todo List is Empty
            </p>
        )}
    </ul>
  )
}

export default TodoList