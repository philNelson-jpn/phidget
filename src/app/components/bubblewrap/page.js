'use client'
import React from 'react'
import styles from './page.module.css'
import { range } from '../../../app/utlis'
import { motion } from 'framer-motion'
import useSound from 'use-sound'

const boxes = [
	{
		id: 1,
		on: true,
	},
	{
		id: 2,
		on: true,
	},
	{
		id: 3,
		on: true,
	},
	{
		id: 4,
		on: true,
	},
	{
		id: 5,
		on: true,
	},
	{
		id: 6,
		on: true,
	},
	{
		id: 7,
		on: true,
	},
	{
		id: 8,
		on: true,
	},
	{
		id: 9,
		on: true,
	},
	{
		id: 10,
		on: true,
	},
	{
		id: 11,
		on: true,
	},
	{
		id: 12,
		on: true,
	},
	{
		id: 13,
		on: true,
	},
	{
		id: 15,
		on: true,
	},
	{
		id: 16,
		on: true,
	},
	{
		id: 17,
		on: true,
	},
]

export default function BubbleWrap() {
	const [squares, setSquares] = React.useState(boxes)

	const [popUp] = useSound('sounds/happyPop.mp3', {
		playbackRate: 0.7,
		volume: 0.8,
	})

	const [pushPop] = useSound('sounds/multiPop.mp3', {
		playbackRate: 0.5,
		volume: 0.8,
	})

	function toggleBox(id) {
		const nextSquares = squares.map((square) =>
			square.id === id ? { ...square, on: !square.on } : square
		)
		setSquares(nextSquares)
	}

	const squareElements = squares.map((square) => (
		<Box
			key={square.id}
			on={square.on}
			toggleBox={() => {
				toggleBox(square.id)
				square.on ? pushPop() : popUp()
			}}
		/>
	))

	return (
		<>
			<div className={styles.grid}>{squareElements}</div>
		</>
	)
}

export function Box({ on, toggleBox }) {
	const onStyles = {
		background: 'linear-gradient(#F3F3F3, #E6E6E6)',
		boxShadow:
			'inset -1px -1px 2px hsla(0, 0%, 0%, 0.16), inset 0px 2px 3px hsla(0, 0%, 100%, 1), inset -1px -4px 6px  hsla(0, 0%, 0%, .12)',
		filter:
			'drop-shadow(2px 5px 2px hsla(0, 0%, 0%, 0.3)) drop-shadow(0px 4px 16px hsla(0, 0%, 0%, 0.1))',
		scale: '1.05',
	}
	const offStyles = {
		background: 'linear-gradient(#E6E6E6, #F3F3F3)',
		boxShadow:
			'inset 1px 1px 2px hsla(0, 0%, 100%, 0.9), inset 1px 1px 6px  hsla(0, 0%, 0%, .6), inset 2px 4px 8px  hsla(0, 0%, 0%, .2)',
		filter:
			'drop-shadow(0px 0px 0px hsla(0, 0%, 0%, 0)) drop-shadow(0px 0px 0px hsla(0, 0%, 0%, 0))',
		scale: '1',
	}
	const boxStyles = {
		background: on ? `${onStyles.background}` : `${offStyles.background}`,
		filter: on ? `${onStyles.filter}` : `${offStyles.filter}`,
		boxShadow: on ? `${onStyles.boxShadow}` : `${offStyles.boxShadow}`,
		scale: on ? `${onStyles.scale}` : `${offStyles.scale}`,
	}

	return (
		<motion.div
			animate={{
				filter: boxStyles.filter,
				scale: boxStyles.scale,
				boxShadow: boxStyles.boxShadow,
			}}
			transition={{ type: 'spring', stiffness: 250, damping: 10 }}
			style={boxStyles}
			className={styles.cell}
			onClick={toggleBox}
		></motion.div>
	)
}

// export function BubbleWrapButtons() {
// 	const [numRows, setNumRows] = React.useState(3)
// 	const [numCols, setNumCols] = React.useState(3)

// 	const id = React.useId()
// 	const [isOn, setIsOn] = React.useState(false)

// 	function increaseNumRows() {
// 		setNumRows((prevNum) => prevNum + 1)
// 		setNumCols((prevNum) => prevNum + 1)
// 	}

// 	function decreaseNumRows() {
// 		if (numRows <= 1) {
// 			return
// 		}
// 		setNumRows((prevNum) => prevNum - 1)
// 		setNumCols((prevNum) => prevNum - 1)
// 	}

// 	return (
// 		<>
// 			<div className={styles.buttonGroup}>
// 				<button onClick={decreaseNumRows}>-</button>
// 				<button onClick={increaseNumRows}>+</button>
// 			</div>
// 			<div className={styles.grid}>
// 				{range(numRows).map((rowIndex) => (
// 					<div key={rowIndex} className={styles.row}>
// 						{range(numCols).map((colIndex) => {
// 							const colId = `${id}-${colIndex}-${rowIndex}`
// 							return (
// 								<div
// 									style={{
// 										display: 'grid',
// 										placeItems: 'center',
// 										fontSize: '1.25rem',
// 										color: 'black',
// 									}}
// 									key={colId}
// 									className={styles.cell}
// 								>
// 									{(rowIndex + 1) * (colIndex + 1)}
// 								</div>
// 							)
// 						})}
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	)
// }
