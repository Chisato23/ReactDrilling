import React from 'react'
import {Link} from 'react-router-dom';

function MainNav() {
  return (
    <ul>


<Link to="/home">Home</Link>
<Link to="/contact">Contact</Link>
<Link to="/about">About</Link>



    </ul>
  )
}

export default MainNav