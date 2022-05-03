import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar';
import { Button, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavigationMenu = ({ closeParentMenu }) => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => {
    setAnchorEl(null);
    closeParentMenu();
  };
  const handleMenuClick = (category) => {
    navigate(`/${category}`);
    handleMenuClose();
  };

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Button
          sx={{
            color: {
              sm: 'primary.main',
              md: 'clear.main',
            },
          }}
          variant="text"
          onClick={() => navigate('/products')}
        >
          View all
        </Button>
        <Button
          sx={{
            color: {
              sm: 'primary.main',
              md: 'clear.main',
            },
            marginLeft: 3,
            marginRight: 3,
          }}
          variant="text"
          onClick={handleMenuOpen}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Categories
        </Button>
        <Menu open={open} onClose={handleMenuClose} anchorEl={anchorEl}>
          <MenuItem onClick={() => handleMenuClick('men')}>Men</MenuItem>
          <MenuItem onClick={() => handleMenuClick('women')}>Women</MenuItem>
          <MenuItem onClick={() => handleMenuClick('kids')}>Kids</MenuItem>
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
