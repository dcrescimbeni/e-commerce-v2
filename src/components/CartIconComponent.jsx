import { Container, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartIconComponent = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <IconButton
        color="clear"
        size="large"
        onClick={() => navigate('/shoppingcart')}
      >
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
    </Container>
  );
};

export default CartIconComponent;
