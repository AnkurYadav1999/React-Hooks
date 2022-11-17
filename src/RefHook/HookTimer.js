import React,{useState,useEffect,useRef} from 'react'


function HookTimer() {
  const [ timer,setTimer]=useState(0)

  const intervalRef = useRef();

  const ticker=()=>{
    setTimer((prevTimer)=>prevTimer+1)
  }

  useEffect(()=>{
  intervalRef.current=setInterval(ticker,1000)
  return ()=> clearInterval(intervalRef.current)  
  },[])

  return (
    <div>
       <h1>
       {timer}
       </h1>
       <button  onClick={()=>clearInterval(intervalRef.current)}>Stop</button>
    </div>
  )
}

export default HookTimer