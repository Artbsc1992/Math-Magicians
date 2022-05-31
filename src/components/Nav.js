import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => (
  <div>
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul className="links">
        <li><Link to="/home">Home</Link></li>
        {' '}
        |
        {' '}
        <li><Link to="/Calculator">Calculator</Link></li>
        {' '}
        |
        {' '}
        <li><Link to="/Quote">Quote</Link></li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default NavBar;
