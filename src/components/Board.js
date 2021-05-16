import React, { useEffect, useState } from 'react'
import BoardSquare from './BoardSquare'
import "./Board.css"

export default function Board({board,setBoard}) {

  console.log(board) 
  return (
    <div className="board">
      {
        board.map((value,i)=>(
          <BoardSquare 
          key={i}
          row={value}
          rowIn={i}
          setBoard={setBoard}
          />
        ))
      }
    </div>
  )
}
