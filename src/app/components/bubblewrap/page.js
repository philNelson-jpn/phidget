'use client'
import React from 'react'
import styles from './page.module.css'
import { range } from '../../../app/utlis'

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
]

export default function BubbleWrap() {
	const [squares, setSquares] = React.useState(boxes)

	// function + map
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
			toggleBox={() => toggleBox(square.id)}
		/>
	))

	return <div className={styles.grid}>{squareElements}</div>
}

export function Box({ on, toggleBox }) {
	const onStyles = {
		background: 'linear-gradient(#F3F3F3, #E6E6E6)',
		boxShadow:
			'inset -1px -1px 2px hsla(0, 0%, 0%, 0.16), inset 0px 2px 3px hsla(0, 0%, 100%, 1), inset -1px -4px 6px  hsla(0, 0%, 0%, .12)',
		filter:
			'drop-shadow(2px 5px 2px hsla(0, 0%, 0%, 0.3)) drop-shadow(0px 4px 16px hsla(0, 0%, 0%, 0.1))',
	}
	const offStyles = {
		background: 'linear-gradient(#E6E6E6, #F3F3F3)',
		boxShadow:
			'inset 1px 1px 2px hsla(0, 0%, 100%, 0.9), inset 1px 1px 6px  hsla(0, 0%, 0%, .6), inset 2px 4px 8px  hsla(0, 0%, 0%, .2)',
		filter:
			'drop-shadow(0px 0px 0px hsla(0, 0%, 0%, 0)) drop-shadow(0px 0px 0px hsla(0, 0%, 0%, 0))',
	}
	const boxStyles = {
		background: on ? `${onStyles.background}` : `${offStyles.background}`,
		filter: on ? `${onStyles.filter}` : `${offStyles.filter}`,
		boxShadow: on ? `${onStyles.boxShadow}` : `${offStyles.boxShadow}`,
	}

	return (
		<div style={boxStyles} className={styles.cell} onClick={toggleBox}></div>
	)
}

// export default function BubbleWrap() {
// 	const [numRows, setNumRows] = React.useState(8)
// 	const [numCols, setNumCols] = React.useState(8)

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
// 										color: 'black'
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
