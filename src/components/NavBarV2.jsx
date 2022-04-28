import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSession } from '../state/user';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiConverseShoe } from 'react-icons/gi';

import { AppBar, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import UserActions from './UserActions';
import NavigationMenu from './NavigationMenu';

const NavBarV2 = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <AppBar position="fixed" sx={{ paddingTop: 2, paddingBottom: 2 }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          <Typography variant="h5">
            <GiConverseShoe size={30} />
            SNikers
          </Typography>
        </Box>
        <NavigationMenu />
        <Box sx={{ display: 'flex' }}>
          <Container>
            <AiOutlineShoppingCart size={32} />
          </Container>
          <UserActions user={user} />
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBarV2;
