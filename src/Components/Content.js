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

  return (
    <main>
        <div className="container">
            <h2 className="text-center display-4 py-3">Groceries List</h2>
            <ul class="list-group">
              {items.map(item => (
                <li className="list-group-item" key={item.id}>
                <input className="form-check-input me-1 " type="checkbox" checked={item.checked} aria-label="..."/>
                  <span className="px-3">{item.item}</span>
                  {/* <i className="fas fa-trash-can pt-2" style={{ color: 'green', float: 'right', cursor: 'pointer' }}></i> */}
                  <FaTrashAlt style={{ color: 'green', float: 'right', cursor: 'pointer' }} role="button" tabIndex="0" />
                </li>
              ))}
            </ul>
        </div>
    </main>
    
  )
}

export default Content