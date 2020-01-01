import React, { useState } from 'react'

const LoginForm = () => {
	const [username, setUsername] = useState([])
	const [password, setPassword] = useState([])

	const handleLogin = (event) => {
		event.preventDefault()
	}

	const handleVisitorLogin = (event) => {
		event.preventDefault()
	}

	return (
		<div>
			<h3>Login</h3>
			<form onSubmit={handleLogin}>
				<div>
					Username:
					<input 
						value={username} 
						onChange={() => setUsername(username)}
					/>
					Password:
					<input
						value={password}
						onChange={() => setPassword(password)}
					/>
				</div>
				<button type="submit">Log in</button>
			</form>
			or
			<button onClick={() => handleVisitorLogin}>Log in as visitor</button>
		</div>
	)
}

export default LoginForm