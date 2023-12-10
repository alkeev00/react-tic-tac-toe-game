import React from 'react'
import Box from '../Box/Box'
import styles from './Board.module.css'

const Board = ({ board, onClick, xPlaying }) => {
	return (
		<div className={styles.board}>
			{board.map((value, id) => {
				return (
					<Box
						key={id}
						xPlaying={xPlaying}
						value={value}
						onClick={() => value === null && onClick(id)}
					/>
				)
			})}
		</div>
	)
}

export default Board
