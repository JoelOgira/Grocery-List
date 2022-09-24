import './grocery.css';
import { useState, useEffect } from "react";
import GroceryFooter from './GroceryFooter';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

const Grocery = () => {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('New Shopping List')) || []);
  const [newItem, setnewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('New Shopping List', JSON.stringify(items));
  }, [items])

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

  const handleSearch = () => {

  }

  return (
    <div className="Grocery container">
        <main>

          <SearchItem 
            search={search}
            setSearch={setSearch}
          />

          <AddItem 
            newItem={newItem}
            setnewItem ={setnewItem}
            handleSubmit={handleSubmit}
          />

          <Content 
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
          
        </main>
        <GroceryFooter 
            length={items.length}
        />
    </div>
  )
}

export default Grocery; 