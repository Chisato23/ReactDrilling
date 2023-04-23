import React from 'react'
import { useState } from 'react';
import Btns from './Header/useEffectTest/Btns';


function Form(props) {

function submitted(ev){ev.preventDefault();
  props.addTerm(ev.target['key'].value);


}

  return (
    <>
    <form onSubmit={submitted}>
    <input type='text' name='key' />
    <button type='submit'>Submit</button>
    
    </form>
    {props.searchTerm &&<p>You searched for: {props.searchTerm}</p>}
    <p>{props.drill}</p>
    <Btns re={props.drill} result={props.searchTerm}/>

    </>
  )
}

export default Form