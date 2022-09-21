import './grocery.css';
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

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
          <ul className="list-group">
            {items.length? (items.map(item => (
              <li className="grocery-list list-group-item my-1" style={{border: '1px solid', borderRadius: '5px'}} key={item.id}>
                <input className="form-check-input" style={{border:'1px solid'}} type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked}/>
                <label className="form-check-label card-text mx-3" htmlFor="firstCheckbox">{item.item}</label>
                <FaTrashAlt className="trash-icon" role="button" onClick={() => handleDelete(item.id)} style={{float: 'right', marginTop: '5px'}} tabIndex="0"/>
              </li>))) : (<p className='empty-message'>The Grocery List is empty ! ! !</p>)
            }
          </ul>
        </main>
    </div>
  )
}

export default Grocery; 