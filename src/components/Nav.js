import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul className="links">
        <li><Link to="/home">Home</Link></li>
        {' '}
        |
        {' '}
        <li><Link to="/calculator">Calculator</Link></li>
        {' '}
        |
        {' '}
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </div>
);

export default NavBar;
