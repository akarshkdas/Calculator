import React from 'react';
import './Calculator_Header.css'; // Optional: for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Calculator App</h1>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
