import './grocery.css';
import { useState, useEffect } from "react";
import GroceryFooter from './GroceryFooter';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

const Grocery = () => {
  const API_URL =  `http://localhost:8000/items`;

  const [items, setItems] = useState([]);
  const [newItem, setnewItem] = useState('');
  const [search, setSearch] = useState('');
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
      }
    }

    (async () => await fetchItems())();
  }, [])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems);
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
          { fetchError && <p className="text-center" style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
      
            
          { !fetchError && <Content
              items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          }
            
          { !fetchError && <GroceryFooter 
              length={items.length}
            />
          }

        </main>
    </div>
  )
}

export default Grocery; 