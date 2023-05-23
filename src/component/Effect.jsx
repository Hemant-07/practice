import React, { useEffect, useState } from 'react'

function Effect() {
    const [num,setNum] =useState(0)
    const [count,setCount] = useState(100)
    useEffect(()=>{
             alert("clicked this button")
            document.write(`you clicked me  ${num} times`)
    },[num])
  return (
    <div>
      <button onClick={()=>{setNum(num+1)}}> {num}</button>
      <button onClick={()=>{setCount(count-1)}}> {count}</button>
    </div>
  )
}

export default Effect
