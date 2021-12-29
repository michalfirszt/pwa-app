import React from 'react';

import DevicePosition from './components/DevicePosition';
import NetworkState from './components/NetworkState';
import Notes from './components/Notes';

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
    </div>
  );
};

export default App;
