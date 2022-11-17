import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  const [posts,setPosts]=useState([]) 
  const [input,setInput]=useState("")
  const [id,setId]=useState(1)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then((res)=>{
        console.log(res)
        setPosts(res.data)
     })
     .catch((err)=>{
        console.log(err)
     })
  },[id])
    
  return (
    <div>
       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
       <button onClick={()=>setId(input)}>Click</button>
       <h2>{posts.title}</h2>
      {/* <ul>
        {
            posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })
        }
      </ul> */}
    </div>
  )
}

export default DataFetching