import './grocery.css';
import { useState, useEffect } from "react";
import GroceryFooter from './GroceryFooter';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

const Grocery = () => {
  const API_URL =  `http://localhost:8000/items`;

  const [items, setItems] = useState([]);
  const [newItem, setnewItem] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [fetchError, setfetchError] = useState(null);

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Could not fetch items from database');
        const listItems = await response.json();
        setItems(listItems);
        setfetchError(null);
      } catch (err) {
        setfetchError(err.message)
      } finally {
        setisLoading(false);
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 3000);

    
  }, [])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems);

    const addOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, addOptions);
    if (result) {setfetchError(result)}

  }

  const handleCheck = id => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item );
    setItems(listItems);
  }

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;  
    // Add new item
    addItem(newItem);
    setnewItem('');
  }

  return (
    <div className="Grocery container">        

          <SearchItem 
            search={search}
            setSearch={setSearch}
          />

          <AddItem 
            newItem={newItem}
            setnewItem ={setnewItem}
            handleSubmit={handleSubmit}
          />

        <main>
          {isLoading && <p className='text-center my-4' style={{color: 'green'}}>Your List is Loading ...</p>}

          { fetchError && <p className="text-center my-4" style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
      
            
          { !fetchError && !isLoading && <Content
              items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          }
            
          { !fetchError && !isLoading && <GroceryFooter 
              length={items.length}
            />
          }

        </main>
    </div>
  )
}

export default Grocery; 