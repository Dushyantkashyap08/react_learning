import React, { useState } from 'react'
import './Counter.css'

//here the state (count' value) is managed in the child component
const Counter = () => {
    const[count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id="para">{count}</p>
        <button id="btn" onClick={() => {setCount(count+1)}}>Increment</button>
        <button id="btn" onClick={() => {setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter
