import { useState } from "react";
import Buttons from "./Buttons";
import './changeBg.css'

const ChangeBgCard = () => {

  const [colorValue, setcolorValue] = useState('');
  const [isDarkText, setisDarkText] = useState(true);

  return (
    <div className="container">
        <div className="card mb-4" style={{padding: '150px', backgroundColor: colorValue,borderRadius: '15px', border: colorValue? colorValue : '1px solid green' }}>
            <div className="card-body">
                <p className="card-text text-center" style={{color: isDarkText? 'black' : 'white'}}>{colorValue? colorValue : 'Empty Value'}</p>
            </div>
        </div>
        <Buttons 
          colorValue={colorValue}
          setcolorValue={setcolorValue}
          isDarkText={isDarkText}
          setisDarkText={setisDarkText}
        />
    </div>
  )
}

export default ChangeBgCard;