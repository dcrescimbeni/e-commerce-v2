import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getSession, sendLogoutRequest } from '../state/user';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiConverseShoe } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import SearchBar from './SearchBar';

const NavBarV2 = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  let navigate = useNavigate();

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  const handleClick = () => {
    dispatch(sendLogoutRequest());
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

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
        <Box sx={{ display: 'flex' }}>
          <Button
            color="clear"
            variant="outlined"
            onClick={() => navigate('/products')}
          >
            View all
          </Button>
          <Button
            color="clear"
            variant="outlined"
            onClick={handleMenuOpen}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ marginLeft: 3, marginRight: 3 }}
          >
            Categories
          </Button>
          <Menu open={open} onClose={handleMenuClose} anchorEl={anchorEl}>
            <MenuItem onClick={() => navigate('/men')}>Men</MenuItem>
            <MenuItem onClick={() => navigate('/women')}>Women</MenuItem>
            <MenuItem onClick={() => navigate('/kids')}>Kids</MenuItem>
          </Menu>
          <SearchBar
            handleSearchSubmit={handleSearchSubmit}
            setSearchTerm={setSearchTerm}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Container>
            <AiOutlineShoppingCart size={32} />
          </Container>
          <Container>
            <CgProfile size={32} />
          </Container>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBarV2;
