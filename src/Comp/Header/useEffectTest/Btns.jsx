import React from 'react'
import { useState,useEffect } from 'react'

function Btns({result}) {
    const [display,setDisplay]=useState('posts')
    const [json,setJson]=useState([])
    // const [searchResult,setSearchResult]=useState()
    


    useEffect(()=>{(
    console.log('UE its working'),
    fetch(`https://jsonplaceholder.typicode.com/${display}`)
  .then((response) => response.json())
  .then((json) => setJson(json))
    )
    },[display])
  return (
    <>
    {/* <button onClick={()=>{setDisplay('Cats')}}>Cats</button>
    <button onClick={()=>{setDisplay('Dogs')}}>Dogs</button> */}
    <button onClick={()=>{setDisplay('users')}}>users</button>
    <button onClick={()=>{setDisplay('posts')}}>posts</button>
    <div>This is the search result for:{result}!!!!</div>

    <div>{display}</div>

    {json.map((item)=>{return <pre>{JSON.stringify(item)}</pre>})}
    </>
  )
}

export default Btns