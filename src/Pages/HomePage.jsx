import { Card, CardMedia, Container } from '@mui/material';
import React from 'react';
import ProductList from '../components/ProductsList';
import hero from '../images/hero.jpg';

function HomePage({ products }) {
  return (
    <Container>
      <Card sx={{ marginBottom: 3 }}>
        <CardMedia
          component="img"
          image={hero}
          alt="hero image"
          height="300"
        ></CardMedia>
      </Card>
      <ProductList products={products} />
    </Container>
  );
}

export default HomePage;
