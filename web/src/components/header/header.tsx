import React from 'react';
import { ReactComponent as Logo } from '../../common/logo.svg';
import './header.css';

type HeaderProps = {
  username: string | null;
  onSignOut: () => void;
};

const Header = (props: HeaderProps) => (
  <header>
    <Logo className="logo" />
    <h1>Ono Challenge</h1>
    {props.username && (
      <div>
        Hello {props.username}!{' '}
        <button onClick={props.onSignOut}>logout</button>
      </div>
    )}
  </header>
);

export default Header;
