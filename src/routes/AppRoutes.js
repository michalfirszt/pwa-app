import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DevicePositionView from '../views/DevicePositionView';
import MapView from '../views/MapView';
import NetworkStatus from '../views/NetworkStatus';
import NotesPreview from '../views/NotesPreview';
import QrScanner from '../views/QrScanner';
import PageLayout from './PageLayout';
import paths from './paths';

const AppRoutes = () => (
  <Routes>
    <Route path={paths.root} element={<PageLayout />}>
      <Route index element={<NotesPreview />} />
      <Route path={paths.network} element={<NetworkStatus />} />
      <Route path={paths.qrScanner} element={<QrScanner />} />
      <Route path={paths.map} element={<MapView />} />
      <Route path={paths.devicePosition} element={<DevicePositionView />} />
    </Route>
  </Routes>
);

export default AppRoutes;
