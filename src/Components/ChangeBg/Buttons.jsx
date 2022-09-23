const Buttons = ({ colorValue, setcolorValue, isDarkText, setisDarkText }) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col change">
              <input class="form-control changeInput my-4" type="text" placeholder="Change Color" aria-label="change background color" 
              value={colorValue}
              onChange={e => (setcolorValue(e.target.value))}
              autoFocus
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