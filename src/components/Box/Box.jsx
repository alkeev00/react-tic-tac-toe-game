import React from 'react'
import styles from './Box.module.css'

const Box = ({ value, onClick, xPlaying }) => {
	return (
		<>
			<button
				className={`${styles.box} ${!xPlaying ? styles.oPlaying : ''}`}
				onClick={onClick}
			>
				{value}
			</button>
		</>
	)
}

export default Box
