import { useState } from "react";
import Buttons from "./Buttons";
import './changeBg.css'

const ChangeBgCard = () => {

  const [colorValue, setcolorValue] = useState('');
  const [isDarkText, setisDarkText] = useState(true);
  const [hexValue, setHexValue] = useState('');

  return (
    <div className="container">
        <div className="card mb-4" style={{padding: '150px', backgroundColor: colorValue,borderRadius: '15px', border: colorValue? colorValue : '1px solid green' }}>
            <div className="card-body">
                <p className="card-text text-center mb-2" style={{color: isDarkText? 'black' : 'white'}}>{colorValue? colorValue : 'Empty Value'}</p>
                <p className="text-center py-2">{hexValue? hexValue : null}</p>
            </div>
        </div>
        <Buttons 
          colorValue={colorValue}
          setcolorValue={setcolorValue}
          isDarkText={isDarkText}
          setisDarkText={setisDarkText}
          hexValue={hexValue}
          setHexValue={setHexValue}
        />
    </div>
  )
}

export default ChangeBgCard;