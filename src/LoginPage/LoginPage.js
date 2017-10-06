import React from 'react';

const LoginPage = (props) => {
	return (
		<div className="container text-center">
				<p>name</p>
				<input onChange={props.onLoginChange}
				type="text" className="form-control" aria-label="Text input with checkbox"/>
				<p>password</p>
				<input onChange={props.onPasswordChange}
				type="password" className="form-control" aria-label="Text input with checkbox"/>
				<br/>
				<div>
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