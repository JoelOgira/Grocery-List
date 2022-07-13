import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Components/Content';


const App = () => {

  const handleNameChanges = () => {
    const names = ['Jane', 'Hoe', 'Kalulu'];
    const randomNumber = Math.floor(Math.random() * names.length );
    return names[randomNumber];
  }

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
