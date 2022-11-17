import React,{useState} from 'react'

function Counter2() {
  const initialCount=0;
  const [count,setCount]=useState(initialCount);

  const incrementFive=()=>{
    for(let i=1;i<=5;i++){
        setCount((prevCount)=>prevCount+1)
    }
  }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={incrementFive}>Increment Five</button>
    </div>
  )
}

export default Counter2