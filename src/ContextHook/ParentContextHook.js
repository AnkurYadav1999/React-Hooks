import React from 'react'
import ComponentC from './ComponentC'

// Prior to useContext Hook

// 1. Create the Context
export const userContext = React.createContext()
export const channelContext = React.createContext()

function ParentContextHook() {
  return (
    <div>
    <userContext.Provider value="Ankur">
    <channelContext.Provider value="Code 101">
    <ComponentC/>
    </channelContext.Provider>
    </userContext.Provider>
    </div>
  )
}

export default ParentContextHook