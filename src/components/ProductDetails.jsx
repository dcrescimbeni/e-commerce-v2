import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WriteReview from './WriteReview';
import { getSession } from '../state/user';

import {
  Rating,
  Grid,
  Container,
  Typography,
  Button,
  Paper,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductDetails = ({ onAdd }) => {
  //obtener id del producto a partir de la url
  let currentURL = window.location.href;
  let arrayURL = currentURL.split('/');
  let reducedURL = [];

  for (let i = 0; i < arrayURL.length; i++) {
    if (i === arrayURL.length - 1) {
      reducedURL.push(arrayURL[i]);
    }
  }

  let productID = parseInt(reducedURL);

  const [productInfo, setProductInfo] = useState({});
  const [rating, setRating] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  const user = useSelector((state) => {
    return state.user;
  });

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  function calculateReviewScore(reviews) {
    let reviewScoreSum = 0;
    if (reviews.length > 0) {
      reviewScoreSum = reviews.reduce((scoreSum, currentReview) => {
        return scoreSum + currentReview.score;
      }, 0);
    }

    let scoreAverage = Math.round(reviewScoreSum / reviews.length);
    return scoreAverage;
  }

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/api/products/product/${productID}`
      )
      .then((res) => {
        setProductInfo(res.data);
        let reviewScore = calculateReviewScore(res.data.reviews);
        setRating(reviewScore);
      });
  }, [productID]);

  if (!productInfo.img) return <div></div>;

  return (
    <Container>
      <Paper elevation={1} sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xs={12} md={6}>
            <Container>
              <img
                className="d-block w-100"
                src={productInfo.img[0]}
                alt="First slide"
              />
            </Container>
          </Grid>

          <Grid item xs={12} md={6}>
            <Container>
              <Typography variant="h5">{productInfo.name}</Typography>
              <Rating value={rating} readOnly sx={{ color: 'black' }} />
              <Typography variant="h5">{`$${productInfo.price} `}</Typography>
              <br />
              <Typography variant="body">{productInfo.description}</Typography>
              <br />
              <Container
                sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}
              >
                <Button
                  variant="contained"
                  onClick={() => onAdd(productInfo)}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Container>
            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container>
              <Divider />
              <br />
              <Typography variant="h4">Reviews</Typography>

              {user.firstName ? (
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  Write a review
                </Button>
              ) : (
                <Link to="/login">Log in to write a review</Link>
              )}
              <WriteReview
                openDialog={openDialog}
                handleClose={handleClose}
                productId={productID}
              />
              {productInfo.reviews.map((review, index) => {
                return (
                  <Container key={index} sx={{ marginTop: 4 }}>
                    <Card raised>
                      <CardContent>
                        <Rating value={review.score} readOnly />
                      </CardContent>
                      <CardContent>{review.reviewMessage}</CardContent>
                    </Card>
                  </Container>
                );
              })}
            </Container>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProductDetails;
