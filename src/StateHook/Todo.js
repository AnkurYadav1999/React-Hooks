import React,{useState} from 'react'

function Todo() {
  const[items,setItems]=useState([]);
  const[product,setProduct]=useState("");
  const addItem=()=>{
    setItems([...items,{id:items.length,value:product}])
    setProduct("")
  }
  return (
    <div>
        <input type="text" value={product} onChange={(e)=>setProduct(e.target.value)}/>
        <br/>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {items.map((item)=><li key={item.id}>{item.value}</li>)}
        </ul>
    </div>
  )
}

export default Todo