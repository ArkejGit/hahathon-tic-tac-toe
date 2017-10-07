import React from 'react';

const Cell = (props) => {

	return (
		<div className="cell" onClick={() => props.clickCell(props.id, props.x, props.y)}>
		{props.content}
		</div>
	)
}

export default Cell;