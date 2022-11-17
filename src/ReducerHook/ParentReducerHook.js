// import React, { useReducer } from 'react'
// import DataFetching1 from './DataFetching1'
// import DataFetching2 from './DataFetching2'
// import ComponentA from './ComponentA'
// import ComponentB from './ComponentB'
// import ComponentC from './ComponentC'
// import ReducerCounter3 from './ReducerCounter3'
// import ReducerCounter1 from './ReducerCounter1'
// import ReducerCounter2 from './ReducerCounter2'

// export const CountContext = React.createContext()

// const initialState = 0;
// const reducer = (currentState, action) => {
//   switch (action) {
//     case 'increment':
//       return currentState + 1
//     case 'decrement':
//       return currentState - 1
//     case 'reset':
//       return initialState
//     default:
//       return currentState
//   }
// }

function ParentReducerHook() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  // return (
  //   // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
  //   //   <div>
  //   //     Count - {count}
  //   //     {/* <ReducerCounter1/> */}
  //   //     {/* <ReducerCounter2/> */}
  //   //     {/* <ReducerCounter3/> */}
  //   //     <ComponentA />
  //   //     <ComponentB />
  //   //     <ComponentC />
  //   //   </div>
  //   // </CountContext.Provider>
  // )
  return(
    <div>
{/* <DataFetching1/> */}
{/* <DataFetching2/> */}
    </div>
  )
}

export default ParentReducerHook 