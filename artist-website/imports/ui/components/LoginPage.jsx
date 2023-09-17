import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useNavigate } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const user = useTracker(() => Meteor.user());

  // Redirect to dashboard if user is already logged in
  if (user) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        // Handle the error
        console.error(error);
      } else {
        // Redirect the user to the dashboard
        navigate('/dashboard');
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginPage;
