import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {  
  const today = new Date();
  return (
    <footer className="sticky-footer container">      
      <hr style={{color: 'green', width: '100%', height: '1px'}} />
      <div className="row">
        <div className="col quick-links">
          <ul>
            <h4 className="nav-link">Quick Links</h4>
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
        <div className="col useful-links">
          <ul>
            <h4 className="nav-link">Useful Links</h4>
            <li className="footer-item">
                <Link to="/changebg" className="nav-link">ChangeBg</Link>
            </li>
            <li className="footer-item">
                <Link to="/counter" className="nav-link">Counter</Link>
            </li>
            <li className="footer-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="footer-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col follow-us">
          <ul>
            <h4 className="nav-link">Follow us</h4>
            <li className="footer-item">
                <a href="https://github.com" target="_blank" className="nav-link"><FaGithub style={{fontSize: '22px'}} /></a>
            </li>
            <li className="footer-item">
                <a href="https://linkedin.com" target="_blank" className="nav-link"> <FaLinkedin style={{fontSize: '22px'}} /> </a>
            </li>
            <li className="footer-item">
                <a href="https://twitter.com" target="_blank" className="nav-link"> <FaTwitter style={{fontSize: '22px'}} /> </a>
            </li>
            <li className="footer-item">
                <a href="https://youtube.com" target="_blank" className="nav-link"> <FaYoutube style={{fontSize: '22px'}} /> </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center pb-4" style={{color: 'green'}}>
        Windfall Technologies &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer;