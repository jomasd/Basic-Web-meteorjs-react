import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    Accounts.createUser({ username, password }, (error) => {
      if (error) {
        // Handle the error
        console.error(error);
      } else {
        // Redirect the user to the dashboard
        history.push('/dashboard');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
