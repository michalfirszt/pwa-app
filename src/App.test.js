import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders app text', () => {
  render(<App />);
  expect(screen.getByText('App')).toBeInTheDocument();
});
