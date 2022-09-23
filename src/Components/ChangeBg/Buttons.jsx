import colorNames from "colornames";

const Buttons = ({ colorValue, setcolorValue, isDarkText, setisDarkText, setHexValue }) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col change">
              <input class="form-control changeInput my-4" 
              type="text" placeholder="Change Color" 
              aria-label="change background color" 
              value={colorValue}
              autoFocus
              onChange={e => {
                (setcolorValue(e.target.value));
                (setHexValue(colorNames(e.target.value)));            
              }}
              
              />
            </div>
            <div className="col">
                <button className="btn changebtn btn-outline btn-md my-4"style={{border: '1px solid green', borderRadius: '10px'}} onClick={e => (setisDarkText(!isDarkText))}>Toggle</button>
            </div>
        </div>
    </div>
  )
}

export default Buttons;