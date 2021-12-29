import React from 'react';
import { createUseStyles } from 'react-jss';
import { useNetworkState } from 'react-use';

const useStyles = createUseStyles({
  networkStatus: {
    backgroundColor: ({ online }) => (online ? 'green' : 'red'),
    color: 'white',
    padding: '0 2px',
  },
});

const NetworkState = () => {
  const { online } = useNetworkState();
  const classes = useStyles({ online });

  return (
    <div>
      NetworkState:{' '}
      <span className={classes.networkStatus}>
        {online ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

export default NetworkState;
