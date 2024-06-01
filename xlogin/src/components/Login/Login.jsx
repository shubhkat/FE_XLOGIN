import React, { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        if(username==="user" && password==="password") {
            setError("Welcome, user!");
        } else {
            setError("Invalid username or password");
        }
    }

    const handleUser = (event) => {
        setUsername(event.target.value);
    }

    const handlePass = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <h1>Login Page</h1>
            { !error ? (
            <form onSubmit={handleLogin}>
                <label htmlFor="user">Username:</label>
                <input type="text" name="user" id="user" value={username} onChange={handleUser} required />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" value={password} onChange={handlePass} required />
                <button type="submit">Submit</button>
            </form>
            ) : (
                <p>{error}</p>
            ) }
        </div>
    )
}

export default Login