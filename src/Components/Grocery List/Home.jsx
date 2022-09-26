import SearchItem from './SearchItem';
import Title from './Title';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';


const Home = () => {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');
    const [fetchError, setfetchError] = useState(null);

    const API_URL = 'http://localhost:8000/items';

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Could not fetch requested data');
                const listItems = await response.json();
                setItems(listItems);
                setfetchError(null);
            } catch (error) {
                setfetchError(error.message);
            }
        }
        (async () => await fetchItems())();
    }, []);

    const addItem = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    }

    const handleCheck = id => {
    const listItems = items.map(item => 
        item.id === id ? {...item, checked: !item.checked} : item
        );
        setItems(listItems);
    }

    const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    }

    const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;
    // AddItem
    addItem(newItem);  
    setNewItem('');
    }

  return (
    <div className="Home">
        
        <Title />
        
        <AddItem 
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
        />

        <SearchItem 
            search={search}
            setSearch={setSearch}
        />

        <main>
            {fetchError && <p className='text-center' style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
            {!fetchError && <Content 
                items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />}
            {!fetchError && <Footer 
                length={items.length}
            />}
        </main>
        
        
    </div>
  )
}

export default Home;