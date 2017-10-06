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
			
			</div>
			<div>
			{  (game.players.length < 2) &&
				<button onClick={() => props.clickJoinGame(game.id) }
				type="button" className="btn btn-primary">Join this game
				</button>
			}
			</div>
			</div>
			<br/>
			<div className="buttons">
				<button onClick={() => props.clickAPI(game.id, 'start') }
				type="button" className="btn btn-primary">Start
				</button>
				<button onClick={() => props.clickAPI(game.id, 'leave') }
				type="button" className="btn btn-secondary">Leave
				</button>
				<button onClick={() => props.clickAPI(game.id, 'surrender') }
				type="button" className="btn btn-danger">Surrender
				</button>
			</div>
			<br/>
			<div className="container">
			<Board 
			gameData={game}
			clickCell={props.clickCell}
			/>
			<br/><br/>
			</div>
		</div>
	)
}

export default GamePage;