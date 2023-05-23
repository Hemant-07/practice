import React, { useEffect, useRef, useState } from 'react'

function Ref() {
    const[data,setData] = useState("")
    const count = useRef(0)

    useEffect(()=>{
        //  setCount(count+1)
        count.current = count.current+1
    })
  return (
    <div>
      <input type="text"
      value = {data}
      onChange={(e)=>setData(e.target.value)} />
      <p>the number of times render: {count.current}</p>
    </div>
  )
}

export default Ref
