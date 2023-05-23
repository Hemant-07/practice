import React from 'react';
import { Link } from 'react-router-dom';


function All() {
  return (
    <div>

   
                <ul className='l1'>
                 
                <li> <Link to = "/"> Home </Link> </li>
                <li> <Link to = "/about"> About us  </Link> </li>
                <li> <Link to= "/services"> services </Link></li>
                <li> <Link to= "/gallery"> Gallery  </Link></li>
                <li>  <Link to= "/contact"> contact us  </Link></li>
               
               </ul>
          
   
              
                
                

    </div>
  )
}

export default All
