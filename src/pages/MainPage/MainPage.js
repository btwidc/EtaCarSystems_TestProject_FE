import React from 'react';

import NavMenu from './Components/NavMenu/NavMenu';
import Content from './Components/Content/Content';

import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="main-page">
      <NavMenu />
      <Content />
    </div>
  );
};

export default MainPage;
