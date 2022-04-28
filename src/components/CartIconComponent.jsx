import { Container, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 'auto',
    bottom: -5,
    border: `2px solid ${theme.palette.clear.main}`,
    backgroundColor: `${theme.palette.secondary.main}`,
    padding: '0 4px',
  },
}));

const CartIconComponent = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <IconButton
        color="clear"
        size="large"
        onClick={() => navigate('/shoppingcart')}
      >
        <StyledBadge badgeContent={15} color="secondary">
          <ShoppingCartIcon fontSize="large" />
        </StyledBadge>
      </IconButton>
    </Container>
  );
};

export default CartIconComponent;
