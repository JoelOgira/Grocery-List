import { FaPlus } from "react-icons/fa";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <div className="container">
        <form className="addForm input-group mb-4" onSubmit={handleSubmit}>
            <label htmlFor="addItem" className="form-lable">Add Item</label>
            <input 
                type="text" 
                className="form-control"  autoFocus 
                id="addItem" 
                placeholder="Add Item" 
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value.trim())}
            />
            <button className="btn bg-green" type="submit" aria-label="Add Item">
                <FaPlus />
            </button>
        </form>
    </div>

  )
}

export default AddItem;