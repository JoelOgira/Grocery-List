import { FaTrashAlt } from "react-icons/fa";

const Content = ({items, handleCheck, handleDelete }) => {
  return (
    <ul className="list-group">
        {items.length? (items.map(item => (
            <li className="grocery-list list-group-item my-1" style={{border: '1px solid', borderRadius: '5px'}} key={item.id}>
                <input className="form-check-input" style={{border:'1px solid'}} type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked}/>
                <label className="form-check-label card-text mx-3" htmlFor="firstCheckbox">{item.item}</label>
                <FaTrashAlt className="trash-icon" role="button" onClick={() => handleDelete(item.id)} style={{float: 'right', marginTop: '5px'}} tabIndex="0"/>
            </li>))) : (<p className='empty-message'>The Grocery List is empty ! ! !</p>)
        }
    </ul>
  )
}

export default Content;