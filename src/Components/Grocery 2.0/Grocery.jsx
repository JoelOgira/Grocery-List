import './grocery.css';
import { useState } from "react";
import GroceryFooter from './GroceryFooter';
import Content from './Content';
import AddItem from './AddItem';

const Grocery = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Avocado"
    },
    {
      id: 2,
      checked: false,
      item: "Kitunguu Saumu"
    },
    {
      id: 3,
      checked: false,
      item: "Waru gunia moja"
    }
  ]);

  const [newItem, setnewItem] = useState('');

  const setAndSaveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem('New Shopping List', JSON.stringify(newItem));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems);
  }

  const handleCheck = id => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item );
    setAndSaveItems(listItems);
  }

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setAndSaveItems(listItems);
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
        <main>

          <AddItem 
            newItem={newItem}
            setnewItem ={setnewItem}
            handleSubmit={handleSubmit}
          />

          <Content 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
          <GroceryFooter 
            length={items.length}
          />
        </main>
    </div>
  )
}

export default Grocery; 