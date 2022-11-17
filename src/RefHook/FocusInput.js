import React,{useEffect,useRef} from 'react'

const inputStyle={
    padding:'10px 20px',
    margin:'10px',
    fontSize:'20px'
}

function FocusInput() { 
    const inputRef=useRef(null)

    useEffect(()=>{
      inputRef.current.focus()
    },[]) 
  return (
    <div>
        <input ref={inputRef} style={inputStyle} type="text" />
    </div>
  )
}

export default FocusInput