import React, { useRef, useState } from 'react'


function Useref() {

    const [data,setData] = useState();
    const count = useRef(" ");
  

    const change = ()=>{

        console.log("file:",count);
        count.current.style.backgroundColor = "#82E0AA";
        count.current.focus()
    }

  return (
    <div>
      <input  ref={count}
      type="text" 
      vaalue = {data} 
        onChange={(e)=>setData(e.target.value)} />
        <button onClick={change}>Submit</button>
      
    </div>
  )
}

export default Useref
