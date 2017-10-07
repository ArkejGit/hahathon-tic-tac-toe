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

  fetchGET = endpoint => {
  	return fetch(this.state.url + endpoint, { 
	  method: 'GET', 
	  mode: 'cors', 
	  credentials: 'include',
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	})
  }

  fetchPOST = (endpoint, body) => {
  	return fetch(this.state.url + endpoint, { 
	  method: 'POST', 
	  mode: 'cors', 
	  credentials: 'include', 
	  body: body,
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	}) 	
  }

  handleRegister = e => {
  	if (this.state.login === '' && this.state.password === '') return;
  	this.fetchPOST('user/register/',
  		JSON.stringify({ username: this.state.login, password: this.state.password}))
  	.then(function(res){ console.log(res.json()) })
  }

  handleLogin = e => {
  	if (this.state.login === '' && this.state.password === '') return;
  	this.fetchPOST('user/login/',
  		JSON.stringify({ username: this.state.login, password: this.state.password}))  	
	.then(function(res){ return res.json() })
	.then(function(data){ 
		this.setState({
			usersData: data
		});
		this.getGames();
	}.bind(this));
  }

  handleLogOut = e => {
  	this.fetchPOST('user/logout/', {})  	  
	.then(function(data){ 
		this.setState({
			usersData: {},
			loggedIn: false
		});
	}.bind(this))
  }

  handleCreatingNewRoom = e => {
  	this.fetchPOST('games/', {})
	.then(function(res){ return res.json() })
	.then(function(data){
		this.setState({
			gameData: data,
			duringGame: true
		});
	}.bind(this));
  }

  getGames() {
  	this.fetchGET('games/')
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
		this.fetchPOST('games/' + id + '/join/', {})  	
		.then(function(res){ return res.json() })
		.then(function(data){
			this.setState({
			gameData: data.game,
			duringGame: true,
			});
		}.bind(this));
	}

	handleShowingRoom = id => {
		this.fetchGET('games/' + id)		
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

	handleClickingCell = (id, x,y) => {
		this.fetchPOST('games/' + id + '/moves/',
		JSON.stringify({x: x , y: y}))	  	
		.then(function(res){ return res.json() })
		.then(function(data){
			console.log(data)
		})
	}

	handleClickingAPI = (id, action) => {
		this.fetchPOST('games/' + id + '/' + action + '/', {})	  	
		.then(function(res){ return res.json() })
		.then(function(data){
			console.log(data)
		})
	}

	handleShowingPlayerModal = () => {
		
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
  			clickShowPlayerModal={this.handleShowingPlayerModal}
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