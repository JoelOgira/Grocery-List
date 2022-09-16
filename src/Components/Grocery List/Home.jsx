import SearchItem from './SearchItem';
import Title from './Title';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


const Home = () => {

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
    <div className="Home">
        
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
  )
}

export default Home;