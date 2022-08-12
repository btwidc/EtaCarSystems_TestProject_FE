import React from 'react';

import AppRouter from '../../../../routers/AppRouter';

import './Content.scss';

const Content = () => {
  return (
    <div className="content-container">
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
};
export default Content;
