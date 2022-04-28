import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar';
import { Button, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavigationMenu = () => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Button
          color="clear"
          variant="text"
          onClick={() => navigate('/products')}
        >
          View all
        </Button>
        <Button
          color="clear"
          variant="text"
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
    </>
  );
};

export default NavigationMenu;
