import React from 'react'
import img from "../asset/a1.avif"
import "../web/Style.css"

function Home() {
  return (
    <div>
      <h1> this is Home Page</h1>
        <img src={img} alt=""  width={800} height={700}/>

    </div>
  )
}

export default Home
