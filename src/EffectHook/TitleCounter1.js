import React,{useState,useEffect} from 'react'

function TitleCounter1() {
    const[count,setCount]=useState(0);
    const[input,setInput]=useState('');

    useEffect(()=>{
        console.log("State Updated")
        document.title= `You clicked ${count} times`
        console.log(count)
    },[count])

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default TitleCounter1