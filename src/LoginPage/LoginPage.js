import React from 'react';
import './LoginPage.css';

const LoginPage = (props) => {
	return (
		<div className="container text-center col-sm-6 col-sm-offset-3">
				<h1>Hahathon TicTacToe Game</h1>
				<p>name</p>
				<input onChange={props.onLoginChange}
				type="text" className="form-control" aria-label="Text input with checkbox"/>
				<br/>
				<p>password</p>
				<input onChange={props.onPasswordChange}
				type="password" className="form-control" aria-label="Text input with checkbox"/>
				<br/>
				<div className="buttons">
					<button onClick={props.clickRegister} 
					type="button" className="btn btn-secondary">Register
					</button>
					<button onClick={props.clickLogin}
					type="button" className="btn btn-primary">Login
					</button>
				</div>
		</div>		
	)
}

export default LoginPage;