import React from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';

const useStyles = createUseStyles({
  navItem: {
    border: '1px solid gray',
    cursor: 'pointer',
    padding: '2px 4px',
    margin: '4px 8px',
  },
});

const NavbarItem = ({ to, children }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.navItem} onClick={() => navigate(to)}>
      {children}
    </div>
  );
};

export default NavbarItem;
