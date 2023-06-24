import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      const users = data.users;

      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        setMessage('200 OK');
      
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <h2>Profile</h2>
      
      <p>{username}</p>
      <p>{password}</p>

    </div>
  );
};

export default Login;
