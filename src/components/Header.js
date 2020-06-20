import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className='title'>Wallcome My TodoList </h2>
    </header>
  )
}

export default Header;