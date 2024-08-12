import React, { useState } from "react";
import './Counter.css'; 

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleInc = () => {
        setCount(count + 1);
    }

    const handleDsc = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div className="Counter-bg">
                <h1>COUNTER</h1>
            </div>
        <div className="counter-container">
            <h1 className="counter-heading">{count}</h1>
            <div  className="flex">
            <button className="counter-button" onClick={handleInc}>+</button>
            <button className="counter-button decrement" onClick={handleDsc}>-</button>
            </div>
        </div>
        </div>
    );
}

export default Counter;
