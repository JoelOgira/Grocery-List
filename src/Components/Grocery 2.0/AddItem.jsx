import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setnewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (    
    <form className="addForm input-group mb-3" onSubmit={handleSubmit}>
      <label htmlFor="addItem" className="form-label">Add Item</label>
      <input 
        autoFocus
        required
        value={newItem}
        ref={inputRef}
        onChange={ e => setnewItem(e.target.value)}
        type="text" 
        className="addItem form-control" 
        placeholder="Add Item" 
      />
      <button 
        className="btn btn-outline addBtn" 
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus/>
      </button>
    </form>
  )
}

export default AddItem;