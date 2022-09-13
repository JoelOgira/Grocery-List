import { Link } from "react-router-dom";

const Footer = () => {  
  const today = new Date();
  return (
    <footer className="sticky-footer container">      
      <hr style={{color: 'green', width: '100%', height: '1px'}} />
      <div className="row">
        <div className="col">
          <ul>
            <li className="footer-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="footer-item">
                <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="footer-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="footer-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="footer-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="footer-item">
                <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="footer-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="footer-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="footer-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="footer-item">
                <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="footer-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="footer-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center pb-2" style={{color: 'green'}}>
        Windfall Technologies &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer;