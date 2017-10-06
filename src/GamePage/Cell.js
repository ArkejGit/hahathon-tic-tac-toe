import React from 'react';

const Cell = (props) => {

	return (
		<div className="cell" onClick={() => props.clickCell(props.x, props.y)}>
		{ (props.cell === 'o') &&
			'O'
		}
		{ (props.cell === 'g') &&
			'X'
		}
		</div>
	)
}

export default Cell;