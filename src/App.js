import Header from './Components/Header';
import Title from './Components/Title';
import AddItem from './Components/AddItem';
import Content from './Components/Content';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'Cooking oil'
    },
    {
      id: 2,
      checked: false,
      item: 'Baking flour'
    },{
      id: 3,
      checked: false,
      item: 'Bar soap'
    }
  ]);

  const handleCheck = id => {
    const listItems = items.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item
      );
      setItems(listItems);
      localStorage.setItem('shoppingList', JSON.stringify(listItems));  
  }

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className="App container">
      <Header />
      <Title />
      <AddItem />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
