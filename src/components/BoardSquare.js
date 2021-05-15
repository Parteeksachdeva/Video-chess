import React from 'react'
import Piece from './Piece'
import "./BoardSquare.css"
function BoardSquare({row,rowIn}) {
  return (
    <div className="BoardSquare">
      {
        row.map((value,i)=>(
          <div 
          className={`${rowIn%2===0 ? i%2!==0 && "green" : i%2===0 && "green"} square`}  
          key={i}
          onDragOver={(e) => e.preventDefault()}
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
