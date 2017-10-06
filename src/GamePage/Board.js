import React from 'react';
import Cell from './Cell.js';
import './Board.css';

const Board = (props) => {
	
	const board = Array.isArray(props.gameData.board) ? props.gameData.board : [];

	return (
		<div className="board">
		{ board.map((row, i) => {
			return row.map((cell, j) => {
				return(
				<Cell 
				content={cell}
				x={i}
				y={j}
				clickCell={props.clickCell}
				/>							
				)
			})
		}) }
		</div>
	)
}

export default Board;