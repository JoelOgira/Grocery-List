
const Buttons = ({state, setState, counter, setCounter, handleState, countUp}) => {
  return (
    <div className="buttons">
        <button className="btn btn-outline counterbtn" onClick={e => setState(!state)}>Change State (Inline)</button>
        <button className="btn btn-outline counterbtn" onClick={handleState}>Change State (function)</button>
        <button className="btn btn-outline counterbtn" onClick={e => setCounter({count: counter.count + 1, subs: counter.subs})}>Count Up (Inline)</button>
        <button className="btn btn-outline counterbtn" onClick={countUp}>Count Up (function)</button>
    </div>
  )
}

export default Buttons