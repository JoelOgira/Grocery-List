const Footer = ({length}) => {  
  const today = new Date();
  return (
    <footer className="sticky-footer">
      <hr style={{color: 'green', width: '100%', height: '2px'}} />
      <div className="text-center" style={{color: 'green'}}>
        {length !== 1 ? (length? (<p>Number of items on the list are : {length}</p>):(<p className="text-danger">There are no items on the list</p>)) : (<p className="text-warning">Only 1 item on the list</p>)}
      </div>
      <hr style={{color: 'green', width: '100%', height: '2px'}} />
      <p className="text-center pb-4" style={{color: 'green'}}>
        Simple Grocery List &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer;