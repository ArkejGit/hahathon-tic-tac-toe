import React from 'react';
import './GamePage.css';
import GameNavBar from './GameNavBar.js';
import Board from './Board.js';

const GamePage = (props) => {
	
	const game = props.gameData;

	return (
		<div>
			<GameNavBar 
			gameData={game}
			clickBackToRooms={props.clickBackToRooms}
			/>

			<br/><br/>

			<div className="players">
			<div>
			{ game.players.map((player, j) => {
					return(
						<button key={j}
						type="button" className="btn btn-secondary">{player.name}
						</button>								
					)
				}) }
			</div>
			<div>
			VS
			</div>
			<div>
			{  (game.players.length < 2) &&
				<button onClick={() => props.clickJoinGame(game.id) }
				type="button" className="btn btn-primary">Join this game
				</button>
			}
			</div>
			</div>
			<br/><br/>
			<div className="container">
			<Board 
			gameData={game}
			/>

			</div>
		</div>
	)
}

export default GamePage;