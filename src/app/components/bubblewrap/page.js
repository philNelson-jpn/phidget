'use client'
import React from 'react'
import styles from './page.module.css'
import { range } from '../../../app/utlis'

export default function BubbleWrap() {
	const [numRows, setNumRows] = React.useState(8)
	const [numCols, setNumCols] = React.useState(8)

	const id = React.useId()
	const [isOn, setIsOn] = React.useState(false)

	function increaseNumRows() {
		setNumRows((prevNum) => prevNum + 1)
		setNumCols((prevNum) => prevNum + 1)
	}

	function decreaseNumRows() {
		if (numRows <= 1) {
			return
		}
		setNumRows((prevNum) => prevNum - 1)
		setNumCols((prevNum) => prevNum - 1)
	}

	// React.useEffect(() => {
	// 	// Ignore renders that happen because the
	// 	// checkbox is flipped on. We only want to
	// 	// respond when it's flipped *off*.
	// 	if (isOn) {
	// 		return
	// 	}

	// 	// Flip the checkbox back on in 500ms...
	// 	const timeoutId = window.setTimeout(() => {
	// 		setIsOn(true)
	// 	}, 1500)

	// 	return () => {
	// 		// ...Unless the 'isOn' property changes
	// 		// before that time has elapsed, OR the
	// 		// component happens to unmount:
	// 		window.clearTimeout(timeoutId)
	// 	}
	// }, [isOn])

	return (
		<>
			<div className={styles.buttonGroup}>
				<button onClick={decreaseNumRows}>-</button>
				<button onClick={increaseNumRows}>+</button>
			</div>
			<div className={styles.grid}>
				{range(numRows).map((rowIndex) => (
					<div key={rowIndex} className={styles.row}>
						{range(numCols).map((colIndex) => {
							const colId = `${id}-${colIndex}-${rowIndex}`
							return <div key={colId} className={styles.cell} />
						})}
					</div>
				))}
			</div>
		</>
	)
}
