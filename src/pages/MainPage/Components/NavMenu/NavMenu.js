import React from 'react';

import NavMenuHeader from './NavMenuHeader/NavMenuHeader';
import NavMenuList from './NavMenuList/NavMenuList';

import './NavMenu.scss';

const NavMenu = () => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__body">
        <NavMenuHeader />
        <NavMenuList />
      </div>
    </div>
  );
};

export default NavMenu;
