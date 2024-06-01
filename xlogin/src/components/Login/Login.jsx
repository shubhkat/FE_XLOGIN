import React, { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [login, setLogin] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === "user" && password === "password") {
            setLogin(true);
            setError("");
        } else {
            setLogin(false);
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
            {!login ? (
                <form onSubmit={handleLogin}>
                    {!!error && (<p>{error}</p>)}
                    <div>
                        <label htmlFor="user">Username:</label>
                        <input type="text" name="user" id="user" placeholder='username' value={username} onChange={handleUser} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder='password' value={password} onChange={handlePass} required />
                    </div>
                    <div>
                    <button type="submit">Submit</button>
                    </div>
                </form>
            ) : (
                <p>Welcome, user!</p>
            )}
        </div>
    )
}

export default Login