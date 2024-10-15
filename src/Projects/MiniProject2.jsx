import React, { useState } from 'react';
import "./MiniProject2.css";

const MiniProject2 = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }
    
    const reload = () => {
        setCount(0);
    }

    return (
        <div className='counter-app'>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={increment}> Increment</button>
        <button onClick={decrement}> Decrement</button>
        <button onClick={reload}>Reload</button>
        </div>
    );
};

export default MiniProject2;
