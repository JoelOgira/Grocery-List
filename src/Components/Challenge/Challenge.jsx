import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

const Challenge = () => {

  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {  
    
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error('Ooops! Could not fetch items from database');
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message); 
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, [reqType])

  return (
    <div className="container" style={{border: 'none'}}>
      <Form reqType={reqType} setReqType={setReqType} />
      <main>
        {loading && <p className="text-center" style={{color: 'green', marginTop: '75px'}}>Items are being fetched ... </p>}
        {fetchError && <p className="text-center" style={{color: 'red', marginTop: '75px'}}>{fetchError}</p>}
        {/* {!loading && !fetchError && <List items={items} />} */}
        {!loading && !fetchError && <Table items={items} />}
      </main>
    </div>
  )
}

export default Challenge;