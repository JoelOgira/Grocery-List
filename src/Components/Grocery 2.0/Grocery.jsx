import './grocery.css';
import { useState } from "react";
import GroceryFooter from './GroceryFooter';
import Content from './Content';

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

  const handleCheck = id => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item );
    setItems(listItems);
    localStorage.setItem('New Shopping List', JSON.stringify(listItems));
  }

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem('New Shopping List', JSON.stringify(listItems));
  }

  return (
    <div className="Grocery container">
        <main>
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