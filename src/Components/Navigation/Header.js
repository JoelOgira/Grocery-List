import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-expand-sm bg-transparent py-4">
        <div className="container">
            <div className="navbar-brand">
                <Link to="/" className='py-2'>Windfall Technologies</Link>
            </div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header