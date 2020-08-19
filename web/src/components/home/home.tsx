import React from 'react';
import Header from '../header';
import IngredientList from '../ingredient-list';
import './home.css';

const homeComponent = () => {
  return (
    <div className="home">
      <div className="container">
        <Header />
        <IngredientList />
      </div>
    </div>
  );
};

export default homeComponent;
