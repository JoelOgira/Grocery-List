import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'Cooking oil'
    },
    {
      id: 2,
      checked: false,
      item: 'Baking flour'
    },{
      id: 3,
      checked: false,
      item: 'Bar soap'
    }
  ]);

  const handleCheck = id => {
    const listItems = items.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item
      );
      setItems(listItems);
      localStorage.setItem('shoppingList', JSON.stringify(listItems));  
  }

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <main>
        <div className="container">
            <h2 className="text-center display-4 py-3">Groceries List</h2>
            {items.length ? (
              <ul className="list-group">
              {items.map(item => (
                <li className="list-group-item item" key={item.id}>
                <input className="form-check-input" onChange={() => handleCheck(item.id)} type="checkbox" checked={item.checked} />
                  <label className="px-3" onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                  {/* <i className="fas fa-trash-can pt-2" style={{ color: 'green', float: 'right', cursor: 'pointer' }}></i> */}
                  <FaTrashAlt onClick={() => handleDelete(item.id)} style={{ color: 'green', float: 'right', cursor: 'pointer' }} role="button" tabIndex="0" />
                </li>
              ))}
              </ul>
            ) : (
              <p className="text-center text-danger" style={{marginTop: '200px'}} >Your Grocery List is Empty !!</p>
            )}
        </div>
    </main>
    
  )
}

export default Content