import React, { useState } from 'react'
import Board from './components/Board/Board'
import Score from './components/Score/Score'
import { cross_icon, zero_icon } from './assets/icons/icons'
import { conditions } from './data/conditions'
import Control from './components/Сontrol/Control'

function App() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xPlaying, setXPlaying] = useState(true)
	const [score, setScore] = useState({ xScore: 0, oScore: 0 })
	const [gameOver, setGameOver] = useState(false)

	const handleBoxClick = boxId => {
		const updatedBoard = board.map((value, id) => {
			if (id === boxId) {
				return xPlaying === true ? cross_icon : zero_icon
			} else {
				return value
			}
		})

		const winner = checkWinner(updatedBoard)

		if (winner) {
			if (winner === zero_icon) {
				let { oScore } = score
				oScore += 1
				setScore({ ...score, oScore })
			} else {
				let { xScore } = score
				xScore += 1
				setScore({ ...score, xScore })
			}
		}

		setBoard(updatedBoard)

		setXPlaying(!xPlaying)
	}

	const checkWinner = board => {
		for (let i = 0; i < conditions.length; i++) {
			const [x, y, z] = conditions[i]

			if (board[x] && board[x] === board[y] && board[y] === board[z]) {
				setGameOver(true)
				return board[x]
			}
		}
	}

	const playAgain = () => {
		setGameOver(false)
		setBoard(Array(9).fill(null))
	}

	const NewGame = () => {
		setGameOver(false)
		setBoard(Array(9).fill(null))
		setScore({ xScore: 0, oScore: 0 })
		setXPlaying(true)
	}

	return (
		<div className='container'>
			<header className='header'>
				<Score score={score} xPlaying={xPlaying} gameOver={gameOver} />
				<Control playAgain={playAgain} NewGame={NewGame} />
			</header>
			<Board
				board={board}
				xPlaying={xPlaying}
				onClick={gameOver ? '' : handleBoxClick}
			/>
		</div>
	)
}

export default App
