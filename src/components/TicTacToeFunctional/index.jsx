import React, {useState} from 'react'
import TicTacToeFunctionalBoard from './TicTacToeFunctionalBoard.jsx'
import calculateWinner from './calculateHelper'
import TicTacToeFunctionalInfoDisplay from './TicTacToeFunctionalInfoDisplay.jsx'

function TicTacToeFunctional() {
    const [history, setHistory] = useState([{board: Array(9).fill(null), location: null}])
    const [currenMove, setCurrentMove] = useState(0)
    const [isXNext, setIsXNext] = useState(true)
    const [isAscending, setIsAscending] = useState(true)
    const winner = calculateWinner(history[currenMove].board)

    const handleClick = (id) => {
        const locations = [
            [1, 1],
            [1, 2],
            [1, 3],
            [2, 1], 
            [2, 2],
            [2, 3],
            [3, 1],
            [3, 2],
            [3, 3]
        ]

        const newHistory = history.slice(0, currenMove + 1)
        const currentBoard = newHistory[newHistory.length-1].board
        const newBoard = [...currentBoard]

        if(winner || newBoard[id]) return

        newBoard[id] = isXNext ? "X" : "O"
        setHistory([...newHistory, {board: newBoard, location: locations[id]}])
        setIsXNext(!isXNext)
        setCurrentMove(newHistory.length)
    }

    const jumpTo = (move) => {
        setCurrentMove(move)
        setIsXNext(((move % 2) === 0))
    }

    const sortMoves = () => {
        setIsAscending(!isAscending)
    }

    return (
        <div className="ticTacToe app-container">
            <h1 className="game-title">Tic Tac Toe - Functional component</h1>
            <div className="app">
                <TicTacToeFunctionalBoard
                    board={history[currenMove].board}
                    handleClick={handleClick}
                    winners={winner ? winner.winners : []}
                />
                <TicTacToeFunctionalInfoDisplay
                    history={history}
                    winnerValue={winner ? winner.winnerValue : null}
                    isXNext={isXNext}
                    currenMove={currenMove}
                    jumpTo={jumpTo}
                    isAscending={isAscending}
                    sortMoves={sortMoves}
                />
            </div>
         </div>
    )
 }


export default TicTacToeFunctional

