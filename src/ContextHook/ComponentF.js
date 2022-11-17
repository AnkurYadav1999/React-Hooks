import React from 'react'
// import {userContext,channelContext} from './ParentContextHook'


function ComponentF() {
  return (
    <div>

    {/* Older Way to consume context value */}
    {/* <userContext.Consumer>
        {
            (user)=>{
                return (
                    <channelContext.Consumer>
                        {
                            (channel)=>{
                                return <div>User Context - {user} Channel Context - {channel}</div>
                            }
                        }
                    </channelContext.Consumer>
                )
            }
        }
    </userContext.Consumer> */}
    </div>
  )
}

export default ComponentF