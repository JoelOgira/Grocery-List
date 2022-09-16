import './counter.css';
import { useState } from "react";
import Buttons from "./Buttons";

const Counter = () => {

    const [state, setState] = useState(true);
    const [counter, setCounter] = useState({
        count: 0,
        subs: 0
    });

    const handleState = () => {
        setState(!state);
    }

    const countUp = () => {
        setCounter({
            count: counter.count + 1,
            subs : counter.subs
        })
    }

    return (
        <div className="container counter">
            <div className="card my-4 p-4" style={{border: '1px solid green', borderRadius: '15px'}}>
                <p className="text-left" style={{marginLeft: '10px'}}>State Display : { state? 'Yes' : 'No' }</p>
                <p className='text-left' style={{marginLeft: '10px'}}>Count : {counter.count}</p>
                <p className='text-left' style={{marginLeft: '10px'}}>Substract : {counter.subs}</p>
                <Buttons 
                    state={state}
                    setState={setState}
                    counter={counter}
                    setCounter={setCounter}
                    handleState={handleState}
                    countUp={countUp}
                />
            </div>
        </div>
    )
}

export default Counter;