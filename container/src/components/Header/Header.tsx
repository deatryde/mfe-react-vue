import React, { MouseEventHandler } from 'react';
import type { FC, ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss';

interface HeaderProps {
  signedIn: boolean;
  onSignOut: () => void;
}

const Header: FC<HeaderProps> = ({ signedIn, onSignOut }): ReactElement => {
  const onClick: MouseEventHandler = (): void => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className='appBar'
      >
        <Toolbar className='toolbar'>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            component={RouterLink}
            to='/'
          >
            App
          </Typography>
          <Button
            color='primary'
            variant='outlined'
            className='link'
            component={RouterLink}
            to={signedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {signedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
