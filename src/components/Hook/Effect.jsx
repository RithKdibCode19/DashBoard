import { useEffect, useState } from "react"


const Effect = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log(count)
    },[count])
  return (
    <>
        <center>
            <p>Count = {count}</p>
            <button onClick={()=>setCount(()=> count+1)}>Increasment</button>
        </center>
    </>
  )
}

export default Effect