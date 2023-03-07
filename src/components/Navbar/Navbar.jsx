import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/ai.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'My Profile' },
];

const Navbar = () => (
  <div className="navbar">
    <div>
      <img src={logo} height="60px" alt="logo" />
    </div>
    <div>
      <h1>SpaceX</h1>
      <menu>
        {links.map((link) => (
          <NavLink
            key={link.text}
            to={link.path}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'rgb(53, 148, 207)',
            })}
          >
            {link.text}
          </NavLink>
        ))}
      </menu>
    </div>
  </div>
);

export default Navbar;
