import * as Chess from "chess.js"


export function initializeBoard(){
    const chess = new Chess();
    return chess.board()
 }

 export function getPosition(rowIn,colIn){
    let from
    const arr = ['a','b','c','d','e','f','g','h']
    from=arr[colIn]+""+(8-rowIn)
    return from

 }