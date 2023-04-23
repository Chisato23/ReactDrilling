import React from 'react'

function List(props) {
  return (
    <ul>

   { props.searchTerm.map((term)=>(

    <li key={term}>{term}
    </li>
    )
    )}


    </ul>
  )
}

export default List