const Header = () => {
  return (
    <div className="navbar navbar-expand-sm bg-transparent py-4">
        <div className="container">
            <div className="navbar-brand">
                <a href="/" className='py-2'>Groceries List</a>
            </div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/services" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header