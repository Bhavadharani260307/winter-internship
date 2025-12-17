import { useState } from 'react'
const UseCallback = () => {
    const[number, setNumber] = useState(0);
    const[theme, toggleTheme] = useState(false);
    const styling={
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black"
    };
    
    return (
        <div style={styling}>
            <button onClick={() => toggleTheme(!theme)}>Toggle Theme</button>
            <h3>UseCallback Hook</h3>
            <button onMouseOver={() => setNumber(number - 1)}>-</button>
            <input type="number" value={number} />
            <button onKeyUp={() => setNumber(number + 1)}>+</button>
            <p>The number is{number}</p>
    
        </div>
    );
};

export default UseCallback;