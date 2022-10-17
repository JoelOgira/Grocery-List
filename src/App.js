import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Navigation/Footer';
import Header from './Components/Navigation/Header';
import Home from './Components/Grocery List/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ChangeBgCard from './Components/ChangeBg/ChangeBgCard';
import Counter from './Components/Counter/Counter';
import Grocery from './Components/Grocery 2.0/Grocery';
import Challenge from './Components/Challenge/Challenge';
import Todo from './Components/Todo/Todo';
import BlogHome from './Components/Blog/BlogHome';
import ErrorPage from './Components/Navigation/ErrorPage';

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
          <Route path="/counter" element={<Counter />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/blog/*" element={<BlogHome />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
