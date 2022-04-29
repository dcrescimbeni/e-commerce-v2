import { AppBar, Container, Typography } from '@mui/material';
import React from 'react';
import { GiConverseShoe } from 'react-icons/gi';

const Footer = () => {
  return (
    <AppBar
      position="relative"
      color="primary"
      sx={{ top: 'auto', bottom: 0, padding: 2, display: 'flex' }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography>
          <GiConverseShoe /> SNikers - All Rights Reserved.
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
