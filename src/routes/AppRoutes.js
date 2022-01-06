import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotesPreview from '../views/NotesPreview';
import PageLayout from './PageLayout';
import paths from './paths';

const AppRoutes = () => (
  <Routes>
    <Route path={paths.root} element={<PageLayout />}>
      <Route index element={<NotesPreview />} />
    </Route>
  </Routes>
);

export default AppRoutes;
