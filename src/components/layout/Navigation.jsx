import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
          <li>
            <NavLink to='/' activeClassName={'is-active'}>
                Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName={'is-active'}>
                About
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' activeClassName={'is-active'}>
                Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName={'is-active'}>
                Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/resume' activeClassName={'is-active'}>
                Resume
            </NavLink>
          </li>
      </ul>
    </div>
  );
}

export default Navigation;
