import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  return (
    <div className="container">
        <form className="addForm">
            <label htmlFor="addItem" className="form-lable">Add Item</label>
            <input type="text" className="form-control"  autoFocus id="addItem" placeholder="Add Item" required/>
            <button className="btn bg-green" type="submit" aria-label="Add Item">
                <FaPlus />
            </button>
        </form>
    </div>

  )
}

export default AddItem;