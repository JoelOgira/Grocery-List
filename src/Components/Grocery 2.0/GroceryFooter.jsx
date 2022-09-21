const GroceryFooter = ({ length }) => {
  return (
    <div className="container grocery-footer" style={{color: 'green'}}>
        {length===1 ? (<p className="text-warning">Only 1 item on the list</p>) : (length ? (<p>Number of items on the list is: {length} </p>) : (<p style={{color: 'red'}}>List is empty</p>))}
    </div>
  )
}

export default GroceryFooter;