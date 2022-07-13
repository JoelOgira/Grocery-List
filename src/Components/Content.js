import { useState } from "react";

const Content = () => {

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

  return (
    <main>
        <div className="container">
            <h2 className="text-center display-4 py-3">Groceries List</h2>
  
        </div>
    </main>
    
  )
}

export default Content