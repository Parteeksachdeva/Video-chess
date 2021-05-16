import * as Chess from "chess.js"

let chess 
export function initializeBoard(){
    chess= new Chess();
    return chess.board()
 }

 export function getPosition(rowIn,colIn){
    let from
    const arr = ['a','b','c','d','e','f','g','h']
    from=arr[colIn]+""+(8-rowIn)
    return from

 }

 export function move(from,to){
   console.log(from,"---->" , to)
   const legal=chess.move({
      from : from,
      to : to,
      promotion: 'q'
   })
  console.log(legal)
   return chess.board()
 }