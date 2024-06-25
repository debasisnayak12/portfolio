import React from 'react'
import "../src/App.css";
import Navbar from './Components/Navbar';
import About from './Components/About';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <div className="container">
        <About/>
      </div>
    </div>
  )
}

export default App