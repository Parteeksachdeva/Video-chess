import React,{useState,useEffect} from 'react'
import Piece from './Piece'
import "./BoardSquare.css"
import { getPosition, move } from './Game';
function BoardSquare({row,rowIn,setBoard}) {
  const handleDrop =(e)=>{
    const from= e.dataTransfer.getData("text/html")
    const board=move(from,e.target.id)
    setBoard(board)
    
  }
  return (
    <div className="BoardSquare">
      {
        row.map((value,i)=>(
          <div 
          className={`${rowIn%2===0 ? i%2!==0 && "green" : i%2===0 && "green"} square`}  
          key={i}
          id={`${getPosition(rowIn,i)}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e)}
          >
            {value &&
            <Piece
              type={value.type}
              color={value.color}
              rowIn={rowIn}
              colIn={i}
            />}
          </div>
        ))
      }
    </div>
  )
}

export default BoardSquare
