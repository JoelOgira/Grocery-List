import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  const inputRef = useRef();

  return (
    <div className="container">
        <form className="addForm input-group mb-4" onSubmit={handleSubmit}>
            <label htmlFor="addItem" className="form-label">Add Item</label>
            <input 
                type="text" 
                className="form-control"  
                autoFocus 
                ref={inputRef}
                id="addItem" 
                placeholder="Add Item" 
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value.trim())}
            />
            <button className="btn bg-green" onClick={() => inputRef.current.focus()} type="submit" aria-label="Add Item">
                <FaPlus />
            </button>
        </form>
    </div>

  )
}

export default AddItem;