import React from 'react';
import './RoomsPage.css';
import NavBar from './NavBar.js';

const RoomsPage = (props) => {
	const games = Array.isArray(props.games) ? props.games : [];

	return (
		<div>
		<NavBar 
		usersData={props.usersData}
		logOut={props.logOut}
		/>
		<br/>
		<div className="container text-center">
			<button onClick={props.createNewRoom}
			type="button" className="btn btn-primary">Create New Room
			</button>
			<br/>
			<br/>
				{				 
					games.map(function(game, i) {
					return (
					<div className="panel panel-default" key={i}>
						<div className="panel-heading">
						<button onClick={() => props.clickShowRoom(game.id)}
						type="button" className="btn btn-default"> Game: { game.id}
						</button>	
						</div>
						<div className="panel-body">
						{ game.players.map((player, j) => {
							return(
								<button key={j}
								type="button" className="btn btn-secondary">{player.name}
								</button>								
							)
						}) }
						
					{  (game.players.length < 2) &&
						<button onClick={() => props.clickJoinGame(game.id) }
						type="button" className="btn btn-primary">Join this game
						</button>
					}
						</div>
					</div>

					)
					})
				}
			<br/>
		</div>
		</div>
	)
}

export default RoomsPage;