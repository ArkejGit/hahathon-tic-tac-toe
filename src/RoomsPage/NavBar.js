import React from 'react';
import './RoomsPage.css';

const NavBar = (props) => {
	return (
		<div>
			<ul className="nav justify-content-end">
			  <li className="nav-item">
			    <a><b>user:</b> {props.usersData.username}</a>
			  </li>
			  <li className="nav-item">
			    <a><b>won:</b> {props.usersData.won}</a>
			  </li>
			  <li className="nav-item">
			    <a><b>lost:</b> {props.usersData.lost}</a>
			  </li>
			  <li className="nav-item">
			    <a><b>won by surrender:</b> {props.usersData.won_by_surrender}</a>
			  </li>
			  <li className="nav-item">
			    <a><b>draws:</b> {props.usersData.draws}</a>
			  </li>
			  <li className="nav-item">
			    <a><b>surrendered:</b> {props.usersData.surrendered}</a>
			  </li>
			  <li className="nav-item logout" onClick={props.logOut}>
			    <a><b>Log out</b></a>
			  </li>
			</ul>
		</div>		
	)
}

export default NavBar;