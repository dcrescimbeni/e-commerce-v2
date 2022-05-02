import {
  Button,
  Container,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useDispatch } from 'react-redux';
import { sendLogoutRequest } from '../state/user';

const UserDetailsButton = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(sendLogoutRequest());
    handleMenuClose();
    localStorage.removeItem('token');
    navigate('/');
  };

  let navigate = useNavigate();

  return (
    <Container>
      <Button
        color="clear"
        onClick={handleMenuOpen}
        startIcon={<AccountCircleIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ whiteSpace: 'nowrap' }}
      >
        {user.firstName}
      </Button>
      <Menu open={open} onClose={handleMenuClose} anchorEl={anchorEl}>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate(`/profile`);
          }}
        >
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate(`/userOrders/${user.userId}`);
          }}
        >
          <ListItemIcon>
            <LocalMallIcon />
          </ListItemIcon>
          <ListItemText>Purchase History</ListItemText>
        </MenuItem>
        {user.isAdmin ? (
          <div>
            <Divider />
            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate(`/usersManagement`);
              }}
            >
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText>Admin panel</ListItemText>
            </MenuItem>
          </div>
        ) : null}
        <Divider />
        <MenuItem onClick={handleLogoutClick}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Log out</ListItemText>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default UserDetailsButton;
