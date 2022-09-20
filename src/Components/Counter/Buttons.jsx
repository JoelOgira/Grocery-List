
const Buttons = ({state, setState, counter, setCounter, handleState, countUp, countDown}) => {
  return (
    <div className="buttons">
        <button className="btn btn-outline counterbtn" onClick={e => setState(!state)}>Change State (Inline)</button>
        <button className="btn btn-outline counterbtn" onClick={handleState}>Change State (function)</button>
        <button className="btn btn-outline counterbtn" onClick={e => setCounter({count: counter.count + 1, subs: counter.subs})}>Count Up (Inline)</button>
        <button className="btn btn-outline counterbtn" onClick={countUp}>Count Up (function)</button>
        <button className="btn btn-outline counterbtn" onClick={e => setCounter({count: counter.count, subs: counter.subs - 1})}>Count Down (function)</button>
        <button className="btn btn-outline counterbtn" onClick={countDown}>Count Down (Inline)</button>
    </div>
  )
}

export default Buttons;