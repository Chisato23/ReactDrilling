import React from 'react'
import { useState } from 'react'


function StateFunc() {
    const [cur,setCur]=useState([1,2,3])

    function addZeros(num){ setCur(cArr=>{return [num, ...cArr]})}
  return (
    <>
    <button onClick={()=>{addZeros(0)}}>+0</button>
    <div>{cur}</div>
    </>
  )
}

export default StateFunc