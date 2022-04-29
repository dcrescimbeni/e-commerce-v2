import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';

const ProductsList = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  let [searchParams] = useSearchParams();
  const searchProduct = searchParams.get('query');

  useEffect(() => {
    setCurrentPage(1);
    if (window.location.href.includes('search')) {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/api/products/search?query=${searchProduct}`
        )
        .then((res) => setProductInfo(res.data));
    } else if (window.location.href.includes('women')) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/products/allProducts/1`)
        .then((res) => setProductInfo(res.data));
    } else if (window.location.href.includes('men')) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/products/allProducts/2`)
        .then((res) => setProductInfo(res.data));
    } else if (window.location.href.includes('kids')) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/products/allProducts/3`)
        .then((res) => {
          setProductInfo(res.data);
        });
    } else {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/products/allProducts`)
        .then((res) => setProductInfo(res.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href]);

  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    let numberOfProducts = productInfo.length;
    let productsPerPage = 9;
    let pageCount = parseInt(numberOfProducts / productsPerPage);
    if (numberOfProducts % productsPerPage > 0) {
      pageCount++;
    }
    setNumberOfPages(pageCount);
  }, [productInfo]);

  useEffect(() => {
    let filteredProducts = productInfo.filter((product, index) => {
      let firstElementIndex = (currentPage - 1) * 9;
      let lastElementIndex = firstElementIndex + 8;

      return index >= firstElementIndex && index <= lastElementIndex;
    });

    setPaginatedProducts(filteredProducts);
  }, [currentPage, productInfo]);

  if (!productInfo) return <div></div>;

  return (
    <>
      <Grid container spacing={4}>
        {paginatedProducts?.map((product) => {
          return (
            <Grid item md={4} key={product.productId}>
              <Link to={`/products/${product.productId}`}>
                <Card>
                  <CardMedia
                    component="img"
                    image={product.img[0]}
                    alt="imagen"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography
                      color="secondary"
                      variant="subtitle2"
                    >{`$${product.price}`}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 5,
        }}
      >
        <Pagination
          count={numberOfPages}
          page={currentPage}
          onChange={handlePageChange}
          color="secondary"
        />
      </Container>
    </>
  );
};

export default ProductsList;
