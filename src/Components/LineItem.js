import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item,handleCheck, handleDelete}) => {
  return (
    <li className="list-group-item item" key={item.id}>
        <input className="form-check-input" onChange={() => handleCheck(item.id)} type="checkbox" checked={item.checked} />
        <label className="px-3" onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
        <FaTrashAlt onClick={() => handleDelete(item.id)} style={{ color: 'green', float: 'right', cursor: 'pointer', marginTop: '5px' }} role="button" tabIndex="0" aria-label={`Delete ${item.item}`} />
    </li>
  )
}

export default LineItem;