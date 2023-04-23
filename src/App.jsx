import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Comp/Header/Header'
import List from './Comp/List'
import Btns from './Comp/Header/useEffectTest/Btns'
import MainNav from './Comp/Nav/MainNav'
import About from './Comp/Nav/pages/About'
import Contact from './Comp/Nav/pages/Contact'
import Form from './Comp/Form'

import {Route,Routes} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)
  const [countBtn, setCountBtn] =useState(1)

const [searchTerm,setSearchTerm]=useState([])
const drill ='drilling hard'

function addTerm(term){setSearchTerm([term,...searchTerm])

}
 
 
  function Add(){
    setCountBtn(pre=>pre+10)
  }
function De(){
  setCountBtn(pre=>pre-1)
}
  return (
    <>
    <Header/>
    <MainNav/>
    <div className='routeContainer'>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/home' element={  <Form  drill={drill} searchTerm={searchTerm[0]} setSearchTerm={setSearchTerm} addTerm={addTerm}/>}/>

      </Routes>
    </div>
    {/* <Btns/> */}
    <List searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

    <button onClick={Add}>+</button>
    {countBtn}
    <button onClick={De}>-</button>

       

    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        BAIT Click on the Vite and React logos to learn more
      </p>
    </div>
    </>
  )
}

export default App
