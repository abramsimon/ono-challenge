import React from 'react';
import { ReactComponent as Logo } from '../../common/logo.svg';
import './header.css';

const Header = () => (
  <header>
    <Logo className="logo" />
    <h1>Ono Challenge</h1>
  </header>
);

export default Header;
