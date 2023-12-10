import React from 'react'
import styles from './Control.module.css'

const Control = ({ playAgain, NewGame }) => {
	return (
		<div className={styles.control}>
			<button onClick={NewGame} className={styles.btn}>
				New Game
			</button>
			<button onClick={playAgain} className={styles.btn}>
				Continue
			</button>
		</div>
	)
}

export default Control
