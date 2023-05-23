import React,{useState} from 'react'


function Statedata() {
    const [num,setNum] = useState(0);

    const [data,setData] = useState(10);

    const [fruit,setFruit] = useState("mango")

    const p1 = () =>{
        setNum(num+1);
    }
    const p2 = () =>{
        if(data>0){
            setData(data-1);

        }
        else{
            alert("this is not below zero")
        }
    }
  return (
    <div>
      <h1 >{num}</h1>
      <button onClick={p1}>
        click this button
      </button>
      <h1 >{data}</h1>
      <button onClick={p2}>
        click this button
      </button>
      <h1 >{fruit}</h1>
      <button onClick={()=>setFruit("kivi")} className='a1'>kivi</button>
      <button onClick={()=>setFruit("pear")} className='a1'>pear</button>
      <button onClick={()=>setFruit("pineapple")} className='a1'>pineapple</button>
    </div>
  )
}

export default Statedata
