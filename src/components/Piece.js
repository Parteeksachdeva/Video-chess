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
    
    const handleDragStart= (e, order)=> {
        e.dataTransfer.setData('text/plain', order);
      }

    return (
        <div className="piece">
            <img src={image.default} 
            alt="" 
            className={`piece__img ${fromPosition}`}
            draggable={true}
            onDragStart={(e) => handleDragStart(e,fromPosition)}
            />
            {/* {fromPosition} */}
        </div>
    )
}

export default Piece
