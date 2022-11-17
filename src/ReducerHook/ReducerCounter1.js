import React,{useReducer} from 'react'

const btnStyle={
  backgroundColor:'lightgreen',
  padding:'1.5em',
  margin:'1em 0.5em',
  borderRadius:'10px',
  border:'none',
  fontSize:'15px'
}



const initialState=0;
const reducer=(currentState,action)=>{
  switch(action){
    case 'increment':
      return currentState+1
    case 'decrement':
      return currentState-1
    case 'reset':
      return initialState
    default:
      return currentState

  }
}

function ReducerCounter1() {

 const [count,dispatch] =  useReducer(reducer,initialState)
  return (
    <div>
    <h1>{count}</h1>
      <button style={btnStyle} onClick={()=>dispatch('increment')}>Increment</button>
      <button style={btnStyle} onClick={()=>dispatch('decrement')}>Decrement</button>
      <button style={btnStyle} onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerCounter1