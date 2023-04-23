import React from 'react'
import Links from './Links'

function Nav() {
const links=[
    {title:'Google',url:'http://google.com'},
    {title:'Youtube',url:'http://youtube.com'}
    
    
]


  return (
    <div  className="link-css-wrapper">NAV working
        {links.map((link)=><Links link={link} key={link.title}/>)}
        

    </div>
  )
}

export default Nav