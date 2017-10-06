import React from 'react';

const Cell = (props) => {

	return (
		<div className="cell">
		{ (props.cell !== undefined) &&
			// (props.cell === 'o') ? 'O' : 'X' }
			't'
		}
		</div>
	)
}

export default Cell;