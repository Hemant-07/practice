import React, { useContext } from 'react';
import ComD from "../component/ComD"
import { FirstName,LastName } from '../component/Demo';

function ComB() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

  return (
    <div>
    <h1> My Name is {fname} {lname}</h1>
      <ComD/>
    </div>
  )
}

export default ComB
