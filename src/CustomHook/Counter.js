import React from 'react'
import useCounter from '../Hooks/useCounter'

function Counter() {
   const [count,incrementCount,decrementCount,reset] = useCounter(10,5)

  return (
    <div>
       <h1>{count}</h1>
       <button onClick={incrementCount}>Increment</button>
       <button onClick={decrementCount}>Decrement</button>
       <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter