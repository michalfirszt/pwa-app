import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { useNetworkState } from 'react-use';

import { tKeys } from '../../constants';

const useStyles = createUseStyles({
  networkStatus: {
    backgroundColor: ({ online }) => (online ? 'green' : 'red'),
    color: 'white',
    padding: '0 2px',
  },
});

const NetworkState = () => {
  const { t } = useTranslation();
  const { online } = useNetworkState();
  const classes = useStyles({ online });

  return (
    <div data-testid="network-status">
      {`${t(tKeys.NETWORK_STATUS)}: `}
      <span className={classes.networkStatus}>
        {online ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

export default NetworkState;
