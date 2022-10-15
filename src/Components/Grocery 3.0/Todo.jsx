import {useEffect, useState} from 'react';
import AddTodo from './AddTodo';
import api from './api/todo';
import Header from './Header';
import SearchTodo from './SearchTodo';
import './todo.css';
import TodoList from './TodoList';

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const filteredTodos = todos.filter(todo => ((todo.todo).toLowerCase().includes(search.toLowerCase())));
        setSearchResults(filteredTodos.reverse());
    }, [todos, search])

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await api.get('/todos');
                setTodos(response.data);
                
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchTodos();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
        const myNewTodo = {id, checked: false, todo: newTodo};
        try {
            const response = await api.post('/todos', myNewTodo);
            const allTodos = [...todos, response.data];
            setTodos(allTodos);
            setNewTodo('');
        } catch (error) {
            console.log(error.message);
        }
    }    

    const handleDelete = async (id) => {
        try {
            await api.delete(`/todos/${id}`);
            setTodos( todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
    <div className="Todo py-4">
        <Header />
        <SearchTodo search={search} setSearch={setSearch} />
        <main>
            <TodoList todos={searchResults} handleDelete={handleDelete} />
        </main>
        <AddTodo handleSubmit={handleSubmit} newTodo={newTodo} setNewTodo={setNewTodo} />
    </div>
    )
}

export default Todo;