import { useState } from "react";

const Grocery = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Avocado"
    },
    {
      id: 1,
      checked: false,
      item: "Kitunguu Saumu"
    },
    {
      id: 1,
      checked: false,
      item: "Waru gunia moja"
    }
  ]);

  return (
    <div className="Grocery container">
        
    </div>
  )
}

export default Grocery;