import { AppBar, Container, Typography } from '@mui/material';
import React from 'react';
import { GiConverseShoe } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ top: 'auto', bottom: 0, padding: 2 }}
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
