import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import i18n from './i18n';
import AppRoutes from './routes';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </I18nextProvider>
);

export default App;
