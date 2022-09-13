const Footer = ({length}) => {
  return (
    <div className="container">
        <div className="text-center pt-2 " style={{color: 'green'}}>
            {length !== 1 ? (length? (<p>Number of items on the list are : {length}</p>):(<p className="text-danger">There are no items on the list</p>)) : (<p className="text-warning">Only 1 item on the list</p>)}
        </div>
    </div>
  )
}

export default Footer;