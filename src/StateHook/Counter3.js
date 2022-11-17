import React,{useState} from 'react'

function Counter3() {
  const [name,setName]=useState({firstName:"",lastName:""})  

  const showFirstName=(e)=>{
      setName({...name,firstName:e.target.value})
  }

  const showLastName=(e)=>{
    setName({...name,lastName:e.target.value})
}
  return (
    <div>
    <input type="text" value={name.firstName} onChange={showFirstName} />
    <br/>
    <input type="text" value={name.lastName} onChange={showLastName}/>
    <h2>FirstName - {name.firstName}</h2>
    <h2>LastName - {name.lastName}</h2>
    </div>
  )
}

export default Counter3