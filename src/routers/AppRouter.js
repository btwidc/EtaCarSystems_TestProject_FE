import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { navMenuRoutes } from '../routes/navMenuRoutes';
import { mainRoutes } from '../routes/mainRoutes';

import DashBoard from '../pages/Dashboard/DashBoard';

const AppRouter = () => {
  return (
    <Routes>
      {navMenuRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {mainRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<DashBoard />} />
    </Routes>
  );
};

export default AppRouter;
