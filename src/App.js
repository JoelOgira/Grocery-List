import Header from './Components/Header';
import SearchItem from './Components/SearchItem';
import Title from './Components/Title';
import AddItem from './Components/AddItem';
import Content from './Components/Content';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const addItem = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems)); 
  }

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

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;
    // AddItem
    addItem(newItem);  
    setNewItem('');
  }

  return (
    <div className="App container">
      
      <Header />
      
      <Title />
      
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem 
        search={search}
        setSearch={setSearch}
      />

      <Content 
        items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
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
