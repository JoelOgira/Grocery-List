import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete }) => {
  return (
    <ul className="list-group">
        {items.length? (<ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />) 
        : 
        (<p className='empty-message'>The Grocery List is empty ! ! !</p>)
        }
    </ul>
  )
}

export default Content;