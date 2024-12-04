import { useState } from "react"

const ChessBoard =()=>{

    const createBoard=()=>{
        const board=[]
        for (let row=0;row<8;row++){
            const rowArr=[]
            for(let col=0;col<8;col++){
                const isBlack= (row+col)%2===1
                rowArr.push(isBlack)
            }
            board.push(rowArr)
        }
        
        console.log(board)
            return board
    }

   const [Board, setBoard]= useState(createBoard())

    const renderBlock=(row, col)=>{

        let block=Board[row][col]

        return (
            <div>
                {block?'white':'black'}
            </div>
        )

    }

    return Board.map((rowArr,rowIndex)=>(
        <div className="flex ">
            {rowArr.map((_, colindex)=>(
               renderBlock(rowIndex, colindex)
            ))}
        </div>
    ))
}

export default ChessBoard