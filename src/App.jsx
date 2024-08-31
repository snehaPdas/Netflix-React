import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./App.css"
import Banner from './Components/Navbar/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals,action,comedy,horror} from './Url'



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={originals}title="Netflix Originals"/>
     <RowPost url={action} title="Action" isSmall/>
     <RowPost url={comedy} title="Comedy" isSmall/>
     <RowPost url={horror} title="Horror" isSmall/>


    </div>
  )
}

export default App
