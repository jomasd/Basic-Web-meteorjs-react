import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { useNavigate } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import Button from '../UIComponents/Button/Button';
import TextInput from '../UIComponents/TextInput/TextInput';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const user = useTracker(() => Meteor.user());

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        console.error(error);
      } else {
        // No need to navigate here, useEffect will handle it
      }
    });
  };

  if (user) {
    return null; // or a loading spinner, or nothing, depending on your design
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <TextInput
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <Button label="Log In" type="submit" />
    </form>
  );
};

export default LoginPage;
