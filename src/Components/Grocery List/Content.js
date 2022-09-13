import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
      <div className="container">
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