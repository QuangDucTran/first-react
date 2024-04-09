import React, { useState } from 'react'
import "./App.css"

function App() {
    let [count, setCount] = useState(0);
    const clickDecrease = () => setCount(count - 1);
    const clickReset = () => setCount(0);
    const clickIncrease = () => setCount(count + 1);
    let color = ""
    if (count < 0) color = "red";
    else if (count === 0) color = "";
    else if (count > 0) color = "green";

    return (
        <div className='container'>
            <h1>
                Counter
            </h1>
            <span style={{ color: color }}>{count}</span>
            <div id="btn-group">
                <button onClick={clickDecrease} className="btn btn-decrease">DECREASE</button>
                <button onClick={clickReset} className="btn btn-reset">RESET</button>
                <button onClick={clickIncrease} className="btn btn-increase">INCREASE</button>
            </div>
        </div >
    )
}

export default App