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
    padding: '8px',
  },
});

const PageLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <NavbarItem to={paths.root}>Notes</NavbarItem>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
