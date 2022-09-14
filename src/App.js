import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Navigation/Footer';
import Header from './Components/Navigation/Header';
import Home from './Components/Grocery List/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ChangeBgCard from './Components/ChangeBg/ChangeBgCard';

const App = () => {

  return (
    <Router>      
      <div className="App container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/changebg" element={<ChangeBgCard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
