import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/NavBar.css';
import logo from '../images/planet.png';

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <h1>Space Travelers&lsquo; Hub</h1>
      </Link>

      <ul className="links">
        <li>
          <Link to="/" className={`link ${pathname === '/' ? 'active' : ''}`}>
            Rockets
          </Link>
        </li>
        <li>
          <Link to="/missions" className={`link ${pathname === '/missions' ? 'active' : ''}`}>
            Messions
          </Link>
        </li>
        <li>
          <Link to="/profile" className={`link ${pathname === '/profile' ? 'active' : ''}`}>
            My Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
