import React,{useContext} from 'react'
// import ComponentF from './ComponentF'
import {userContext,channelContext} from './ParentContextHook'

function ComponentE() {

    const user = useContext(userContext)
    const channel = useContext(channelContext)
  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default ComponentE