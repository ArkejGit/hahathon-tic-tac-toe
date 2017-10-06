import React from 'react';
import './GamePage.css';

const GameNavBar = (props) => {
	return (
		<div>
			<ul className="nav justify-content-end">
			  <li className="nav-item">
			    <a><b>game:</b> {props.gameData.id}</a>
			  </li>
			  <li className="nav-item back" onClick={props.clickBackToRooms}>
			    <a><b>Back to Rooms</b></a>
			  </li>
			</ul>
		</div>		
	)
}

export default GameNavBar;