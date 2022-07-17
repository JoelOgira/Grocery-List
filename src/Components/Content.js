import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
        <div className="container">
            <h2 className="text-center display-4 py-3">Groceries List</h2>
            {items.length ? (
              <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            ) : (
              <p className="text-center text-danger" style={{margin: ' auto'}} >Your Grocery List is Empty !!</p>
            )}
        </div>
    </main>
    
  )
}

export default Content;