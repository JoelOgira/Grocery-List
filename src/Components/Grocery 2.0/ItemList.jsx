import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    items.map(item => (
        <li className="grocery-list list-group-item my-1" style={{border: '1px solid', borderRadius: '5px'}} key={item.id}>
            <input className="form-check-input" style={{border:'1px solid black'}} type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked}/>
            <label className="form-check-label card-text mx-3" htmlFor="firstCheckbox">{item.item}</label>
            <FaTrashAlt className="trash-icon" role="button" onClick={() => handleDelete(item.id)} style={{float: 'right', marginTop: '5px'}} tabIndex="0" aria-label={`Delete ${item.item}`} />
        </li>))
  )
}

export default ItemList;