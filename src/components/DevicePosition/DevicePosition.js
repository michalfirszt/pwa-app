import React, { useCallback, useEffect, useState } from 'react';

const getDeviceOrientationPermission = () => {
  if (!('DeviceOrientationEvent' in window)) {
    return Promise.resolve('denied');
  }

  return (
    DeviceOrientationEvent?.requestPermission?.() || Promise.resolve('granted')
  );
};

const DevicePosition = () => {
  const [devicePosition, setDevicePosition] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  const handleDeviceOrientation = useCallback(({ alpha, beta, gamma }) => {
    setDevicePosition({
      alpha: Math.floor(alpha),
      beta: Math.floor(beta),
      gamma: Math.floor(gamma),
    });
  }, []);

  useEffect(() => {
    getDeviceOrientationPermission().then((positionAccess) => {
      if (positionAccess === 'granted') {
        window.addEventListener(
          'deviceorientation',
          handleDeviceOrientation,
          true
        );
      }
    });

    return () => {
      window.removeEventListener(
        'deviceorientation',
        handleDeviceOrientation,
        true
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-testid="device-position">
      <div>alpha: {devicePosition.alpha}</div>
      <div>beta {devicePosition.beta}</div>
      <div>gamma {devicePosition.gamma}</div>
    </div>
  );
};

export default DevicePosition;
