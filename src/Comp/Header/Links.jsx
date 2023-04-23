import React from 'react'
import './links.css'
function Links(props) {
  return (
    <div>
    <a className="link-css" href={props.link.url}>
    {props.link.title}

    </a>
    </div>
  )
}

export default Links