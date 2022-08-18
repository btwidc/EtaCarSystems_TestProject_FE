import React from 'react';

import AppRouter from '../../../../routers/AppRouter';

import './Content.scss';

const Content = () => {
  return (
    <div className="content">
      <div className="content__wrapper">
        <AppRouter />
      </div>
    </div>
  );
};
export default Content;
