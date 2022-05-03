import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Container,
  IconButton,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';

function LoginRegister() {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const theme = useTheme();
  const mobileSize = useMediaQuery(theme.breakpoints.up('md'));

  if (!mobileSize) {
    return (
      <Container>
        <IconButton color="clear" size="large" onClick={handleMenuOpen}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
        <Menu open={open} onClose={handleMenuClose} anchorEl={anchorEl}>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              navigate(`/login`);
            }}
          >
            Log in
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              navigate(`/register`);
            }}
          >
            SignUp
          </MenuItem>
        </Menu>
      </Container>
    );
  }

  return (
    <ButtonGroup variant="text" color="clear">
      <Button sx={{ whiteSpace: 'nowrap' }} onClick={() => navigate('/login')}>
        Log in
      </Button>
      <Button
        sx={{ whiteSpace: 'nowrap' }}
        onClick={() => navigate('/register')}
      >
        Sign up
      </Button>
    </ButtonGroup>
  );
}

export default LoginRegister;
