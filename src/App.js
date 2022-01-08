import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import TranslationProvider from './providers/TranslationProvider';
import AppRoutes from './routes';

const App = () => (
  <TranslationProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </TranslationProvider>
);

export default App;
