import React from 'react'
import styles from './Score.module.css'

import { cross_icon, zero_icon } from '../../assets/icons/icons'

const Score = ({ score, xPlaying, gameOver }) => {
	const { xScore, oScore } = score

	const styleActiveX = () => {
		if (gameOver && !xPlaying) {
			return styles.activeX
		} else if (!gameOver && xPlaying) {
			return styles.activeX
		} else return ''
	}
	const styleActiveO = () => {
		if (gameOver && xPlaying) {
			return styles.activeO
		} else if (!gameOver && !xPlaying) {
			return styles.activeO
		} else return ''
	}

	return (
		<div className={styles.scoreWrapper}>
			<span className={`${styles.score} ${styleActiveX()}`}>
				{cross_icon}
				{xScore}
			</span>
			<span className={`${styles.score} ${styleActiveO()}`}>
				{zero_icon}
				{oScore}
			</span>
		</div>
	)
}

export default Score
