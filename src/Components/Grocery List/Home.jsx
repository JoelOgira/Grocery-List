import SearchItem from './SearchItem';
import Title from './Title';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import apiRequest from '../Grocery 2.0/apiRequest';
import { useState, useEffect } from 'react';


const Home = () => {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setisLoading] = useState(true);
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
            } finally {
                setisLoading(false);
            }
        }
        
        setTimeout(() => {
            (async () => await fetchItems())();
        }, 3000);


    }, []);

    const addItem = async item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);
    if (result) {setfetchError(result)};

    }

    const handleCheck = async id => {
    const listItems = items.map(item => 
        item.id === id ? {...item, checked: !item.checked} : item
        );
        setItems(listItems);
    
    const myItem = listItems.filter(item => item.id === id);
    
    const updateOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ checked: myItem[0].checked })
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) {setfetchError(result)};

    }

    const handleDelete = async id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);

    const deleteOptions = {method: 'DELETE'};
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) {setfetchError(result)};

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
            {isLoading && <p className='text-center my-4 py-4' style={{color: 'green'}}>Fetching Data ...</p>}
            {fetchError && <p className='text-center my-4 py-4' style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
            {!fetchError && !isLoading && <Content 
                items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />}
            {!fetchError && !isLoading && <Footer 
                length={items.length}
            />}
        </main>
        
        
    </div>
  )
}

export default Home;