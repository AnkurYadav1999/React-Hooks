import React,{useState,useEffect} from 'react'

function Timer() {
  const [time,setTime]=useState(0)
  const [startTimer,setStartTimer]=useState(true)
  const [timerId,setTimerId]=useState(0)

  const timer=()=>{
    setTime((prevTime)=>prevTime+1)
  }

  useEffect(()=>{
    let interval=null;
    if(startTimer){
      interval=setInterval(timer,1000);
      setTimerId(interval)
    }
    else{
       clearInterval(timerId)
    }
  },[startTimer])

  return (
    <div>
        <h1>Timer</h1>
        <h1>{time}</h1>
        <button onClick={()=>setStartTimer(true)}>Resume</button>
        <button onClick={()=>setStartTimer(false)}>Pause</button>
    </div>
  )
}

export default Timer;