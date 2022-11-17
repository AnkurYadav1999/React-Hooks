import React,{useState} from 'react'

function Counter1() {
    const [count,setCount]=useState(0);
    
    const IncrementCount=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={IncrementCount}>Increment</button>
    </div>
  )
}

export default Counter1