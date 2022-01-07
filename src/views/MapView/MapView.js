import React, { useEffect, useState } from 'react';

import Map from '../../components/Map';

const MapView = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position?.coords?.latitude);
      setLongitude(position?.coords?.longitude);
    });
  }, []);

  return (
    <div>{latitude && longitude && <Map lat={latitude} lng={longitude} />}</div>
  );
};

export default MapView;
