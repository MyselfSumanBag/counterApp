import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
    let counter = 0
  // increase Value Function
   function increaseValue(){
    if(counter < 100 ){
     counter = counter + 1
     document.querySelector('#count').innerHTML = counter
    }
   }

  //  Decrease Value fuewnction
   function decreaseValue(){
    if(counter > 0){
    counter = counter - 1
    document.querySelector('#count').innerHTML = counter
    }
   }
  return (
    <>
      <div id='logo'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id='heading1'>Vite + React</h1>
      <h1 id='heading2'>Counter App Project</h1>
      <div>
        <button onClick={increaseValue}>Increase Value</button>
        <h4 id='count'>{counter}</h4>
        <button onClick={decreaseValue}>Decrease Value</button>
      </div>
    </>
  )
}

export default App
