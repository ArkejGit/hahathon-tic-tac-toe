import React from 'react';
import LoginPage from '../LoginPage/LoginPage.js';
import RoomsPage from '../RoomsPage/RoomsPage.js';
import GamePage from '../GamePage/GamePage.js';

export default class TicTacToe extends React.Component {
  
  constructor() {
    super();
    this.state = {
      url: 'https://hahaton.venturedevs.net/api/',
      login: '',
      password:'',
      loggedIn: false,
      duringGame: false,
      usersData: {},
      games: {},
      gameData: {}
    };
  }

  handleLoginChange = e => {
    this.setState({login: e.target.value});
  }

  handlePasswordChange = e => {
    this.setState({password: e.target.value});
  }

  handleRegister = e => {
  	if (this.state.login === '' && this.state.password === '') return;
  	fetch(this.state.url + 'user/register/', { 
	  method: 'POST', 
	  mode: 'cors', 
	  credentials: 'include', 
	  body: JSON.stringify({ username: this.state.login, password: this.state.password}),
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	})
	.then(function(res){ console.log(res.json()) })
  }

  handleLogin = e => {
  	if (this.state.login === '' && this.state.password === '') return;
  	fetch(this.state.url + 'user/login/', { 
	  method: 'POST', 
	  mode: 'cors', 
	  credentials: 'include', 
	  body: JSON.stringify({ username: this.state.login, password: this.state.password}),
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	})
	.then(function(res){ return res.json() })
	.then(function(data){ 
		this.setState({
			usersData: data
		});
		this.getGames();
	}.bind(this));
  }

  handleLogOut = e => {
  	  fetch(this.state.url + 'user/logout/', { 
	  method: 'POST', 
	  mode: 'cors', 
	  credentials: 'include', 
	  body: {},
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	})
	.then(function(data){ 
		this.setState({
			usersData: {},
			loggedIn: false
		});
	}.bind(this))
  }

  handleCreatingNewRoom = e => {
	fetch(this.state.url + 'games/', { 
		  method: 'POST', 
		  mode: 'cors', 
		  credentials: 'include',
		  body: {},
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
		})
		.then(function(res){ return res.json() })
		.then(function(data){
			this.setState({
				gameData: data,
				duringGame: true
			});
		}.bind(this));
  }

  getGames() {
  	fetch(this.state.url + 'games/', { 
	  method: 'GET', 
	  mode: 'cors', 
	  credentials: 'include',
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	})
	.then(function(res){ return res.json() })
	.then(function(data){
		this.setState({
		games: data,
		loggedIn: true,
		gameData: {},
		duringGame: false
		});
	}.bind(this));
  }

  handleJoiningGame = id => {
  	fetch(this.state.url + 'games/' + id + '/join/', { 
		  method: 'POST', 
		  mode: 'cors', 
		  credentials: 'include',
		  body: {},
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
		})
		.then(function(res){ return res.json() })
		.then(function(data){
			this.setState({
			gameData: data,
			duringGame: true,
			});
		})
	}

	handleShowingRoom = id => {
		fetch(this.state.url + 'games/' + id, { 
		  method: 'GET', 
		  mode: 'cors', 
		  credentials: 'include',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
		})
		.then(function(res){ return res.json() })
		.then(function(data){
			this.setState({
			gameData: data,
			duringGame: true,
			});
		}.bind(this));
	}

	handleShowingRooms = () => {
		this.getGames();
	}

	handleClickingCell = (x,y) => {
		console.log(x,y);
	}

	handleClickingAPI = (id, action) => {
	  	fetch(this.state.url + 'games/' + id + '/' + action + '/', { 
			  method: 'POST', 
			  mode: 'cors', 
			  credentials: 'include',
			  body: {},
			  headers: {
			    'Accept': 'application/json, text/plain, */*',
			    'Content-Type': 'application/json'
			  },
			})
			.then(function(res){ return res.json() })
			.then(function(data){
				console.log(data)
			})
	}

  render() {
  	return (
  		<div>
  		{ !this.state.loggedIn && 
	  		<LoginPage 
	  		onLoginChange={this.handleLoginChange}
	  		onPasswordChange={this.handlePasswordChange}
	  		clickRegister={this.handleRegister}
	  		clickLogin={this.handleLogin}
  			/> 
  		}  		

  		{ (this.state.loggedIn && !this.state.duringGame) && 
  			<RoomsPage
  			usersData={this.state.usersData}
  			logOut={this.handleLogOut}
  			createNewRoom={this.handleCreatingNewRoom}
  			games={this.state.games}
  			clickJoinGame={this.handleJoiningGame}
  			clickShowRoom={this.handleShowingRoom}
  			/>  		
  		}

  		{ ( this.state.duringGame) && 
  			<GamePage 
  			gameData={this.state.gameData}
  			clickBackToRooms={this.handleShowingRooms}
  			clickJoinGame={this.handleJoiningGame}
  			clickCell={this.handleClickingCell}
  			clickAPI={this.handleClickingAPI}
  			/>
  		}
  		</div>
  	)
  }

}