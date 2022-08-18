import React from 'react';
import { Link } from 'react-router-dom';

import './NavMenuHeader.scss';

const NavMenuHeader = () => {
  return (
    <Link className="nav-menu__logo" to="/">
      <img src={'/images/logo.png'} alt="logo" />
    </Link>
  );
};

export default NavMenuHeader;
