import React from 'react';
import { Link } from 'react-router-dom';

import { navMenuRoutes } from '../../../../../routes/navMenuRoutes';

import './NavMenuList.scss';

const NavMenuList = () => {
  return (
    <div className="nav-menu-list-container">
      <ul className="nav-menu-list">
        {navMenuRoutes.map((item) => {
          return (
            <li key={item.title} className="nav-item">
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenuList;
