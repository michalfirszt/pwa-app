import React, { useEffect, useState } from 'react';

import DevicePosition from './components/DevicePosition';
import NetworkState from './components/NetworkState';
import Notes from './components/Notes';
import QrCodeScanner from './components/QrCodeScanner';

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position?.coords?.latitude);
      setLongitude(position?.coords?.longitude);
    });
  }, []);

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
      {latitude && longitude && <div>Map</div>}
    </div>
  );
};

export default App;
