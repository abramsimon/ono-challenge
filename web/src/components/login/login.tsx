import React, { useState } from 'react';
import './login.css';

type LoginProps = {
  onSignIn: (username: string) => void;
  onSignUp: (username: string) => void;
};

const Login = (props: LoginProps) => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <h2>Login</h2>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => props.onSignIn(username)}>sign in</button>
      <button onClick={() => props.onSignUp(username)}>sign up</button>
    </div>
  );
};

export default Login;
