import React from 'react'
import photos1 from "../asset/p1.avif";
import photos2 from "../asset/p2.avif";
import photos3 from "../asset/p3.avif";
import photos4 from "../asset/p4.avif";
import photos5 from "../asset/p5.avif";
import photos6 from "../asset/p6.avif";
import "../web/Style.css";

function Gallery() {
  return (
    <div>
      <h1> this is Gallery Page</h1>
      <div className="main">
        <div className="m1">
            <img src={photos1} alt="" width={500} height={400} />
        </div>
        <div className="m2">
            <img src={photos2} alt="" width={500} height={400} />
        </div>
        <div className="m3">
            <img src={photos3} alt="" width={500} height={400} />
        </div>
        <div className="m4">
            <img src={photos4} alt="" width={700} height={500} />
        </div>
        <div className="m5">
            <img src={photos5} alt="" width={700} height={500} />
        </div>
        <div className="m6">
            <img src={photos6} alt="" width={700} height={500} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
