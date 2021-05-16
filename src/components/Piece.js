import React, { useState,useEffect } from 'react'
import { getPosition } from './Game'
import "./Piece.css"


function Piece({type,color,rowIn,colIn}) {
    const [image,setImage] = useState('')
    const [fromPosition,setfromPosition] = useState('')
    useEffect(() => {
        setImage(require(`../assets/${type}_${color}.png`))
        const fromPos=getPosition(rowIn,colIn)
        setfromPosition(fromPos)
    }, [type,color,colIn,rowIn])


  const handleDragStart= (e)=>{
    e.dataTransfer.setData("text/html", e.target.id);
  }

    return (
        <div 
        className="piece"
        draggable={true} 
        onDragStart={(e) => handleDragStart(e)}
        >
            <img src={image.default} 
            alt="" 
            className={`piece__img`}
            id={`${fromPosition}`}
            
            
            />
            {/* {fromPosition} */}
        </div>

    )
}

export default Piece
