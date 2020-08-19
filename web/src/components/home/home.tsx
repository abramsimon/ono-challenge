import React, { useState } from 'react';
import Header from '../header';
import IngredientList from '../ingredient-list';
import Login from '../login';
import { initialUser } from '../../models/user';
import './home.css';

const HomeComponent = () => {
  const [user, setUser] = useState(initialUser);

  const onSignIn = (username: string) => {
    setUser({
      username,
    });
  };
  const onSignUp = (username: string) => {
    setUser({
      username,
    });
  };
  const onSignOut = () => {
    setUser({
      username: null,
    });
  };

  return (
    <div className="home">
      <div className="container">
        <Header username={user.username} onSignOut={onSignOut} />
        {!user.username && <Login onSignIn={onSignIn} onSignUp={onSignUp} />}
        {user.username && <IngredientList />}
      </div>
    </div>
  );
};

export default HomeComponent;
