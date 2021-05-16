import React, { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board'
import { initializeBoard } from './components/Game';


function App() {
  const [board,setBoard] = useState([]);
  useEffect(()=>{
    setBoard(initializeBoard());
  },[])

  
  return (
    <div className="app">
      <Board 
      board={board}
      setBoard={setBoard}
      />
    </div>
  )
}

export default App
