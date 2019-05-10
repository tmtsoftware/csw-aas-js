import React from 'react'
import './App.css'
import {Login, Logout} from 'csw-aas-js'

const App: React.FC = () => {
  return (
    <div className="App">
      <p>Hello</p>
      <Login/>
      <Logout/>
    </div>
  )
}

export default App
