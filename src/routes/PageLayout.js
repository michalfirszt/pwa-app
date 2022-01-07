import React from 'react';
import { createUseStyles } from 'react-jss';
import { Outlet } from 'react-router-dom';

import NavbarItem from '../components/NavbarItem';
import paths from './paths';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '8px',
  },
});

const PageLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <NavbarItem to={paths.root}>Notes</NavbarItem>
        <NavbarItem to={paths.network}>Network status</NavbarItem>
        <NavbarItem to={paths.qrScanner}>Qr scanner</NavbarItem>
        <NavbarItem to={paths.map}>Map</NavbarItem>
        <NavbarItem to={paths.devicePosition}>Device position</NavbarItem>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
