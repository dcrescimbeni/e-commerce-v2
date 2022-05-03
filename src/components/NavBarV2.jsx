import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSession } from '../state/user';
import { useDispatch, useSelector } from 'react-redux';

import { GiConverseShoe } from 'react-icons/gi';

import { AppBar, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import UserActions from './UserActions';
import NavigationMenu from './NavigationMenu';

import CartIconComponent from './CartIconComponent';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import NavigationMenuResp from './NavigationMenuResp';

const NavBarV2 = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <AppBar position="fixed">
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ cursor: 'pointer', display: 'flex' }}
        >
          <GiConverseShoe size={30} />
          <Typography
            variant="h5"
            sx={{ display: { xs: 'none', sm: 'inline' } }}
          >
            SNikers
          </Typography>
        </Box>
        {!matches ? <NavigationMenuResp /> : <NavigationMenu />}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CartIconComponent />
          <UserActions user={user} />
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBarV2;
