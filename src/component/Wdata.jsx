import React from 'react'

function Wdata(props) {

    const time = new Date().toLocaleTimeString();
    const day = new Date().toLocaleDateString();
  return (
    <div>

    <h1> time is {time}</h1>
    <h1> Date is {day}</h1>

      <h1> This is {props.text.Name}</h1>
      <h1> This  color is {props.color}</h1>
      <h1> course {props.course}</h1>
      <h1> profile {props.profile}</h1>
      
    </div>
  )
}

export default Wdata
