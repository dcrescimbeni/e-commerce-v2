import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigationMenu from './NavigationMenu';

const NavigationMenuResp = () => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleMenuClick = (category) => {
    navigate(`/${category}`);
    handleMenuClose();
  };

  return (
    <Box sx={{ marginRight: 'auto' }}>
      <Button
        color="clear"
        variant="text"
        onClick={handleMenuOpen}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ marginLeft: 3, marginRight: 3 }}
      >
        Menu
      </Button>
      <Menu open={open} onClose={handleMenuClose} anchorEl={anchorEl}>
        <NavigationMenu closeParentMenu={handleMenuClose} />
      </Menu>
    </Box>
  );
};

export default NavigationMenuResp;
