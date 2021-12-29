import React from 'react';

import DevicePosition from './components/DevicePosition';
import NetworkState from './components/NetworkState';
import Notes from './components/Notes';
import QrCodeScanner from './components/QrCodeScanner';

const App = () => {
  return (
    <div>
      <div>
        <NetworkState />
      </div>
      <div>
        <Notes />
      </div>
      <div>
        <DevicePosition />
      </div>
      <div>
        <QrCodeScanner />
      </div>
    </div>
  );
};

export default App;
