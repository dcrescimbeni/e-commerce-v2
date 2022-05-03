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
  Alert,
  Collapse,
  IconButton,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';

const ProductDetails = ({ onAdd }) => {
  let navigate = useNavigate();

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
  const [openAlert, setOpenAlert] = useState(false);

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
      <Button
        size="small"
        variant="outlined"
        startIcon={<ArrowLeftIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Paper
        elevation={1}
        sx={{ marginTop: 3, paddingTop: 3, paddingBottom: 3 }}
      >
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xs={12} md={6}>
            <Container>
              <Carousel>
                {productInfo.img.map((item, index) => {
                  return (
                    <img
                      className="d-block w-100"
                      src={item}
                      alt="First slide"
                      key={index}
                    />
                  );
                })}
              </Carousel>
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
                  onClick={() => {
                    setOpenAlert(true);
                    onAdd(productInfo);
                  }}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Container>
              <br />
              <Collapse in={openAlert}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlert(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Product added to the cart
                </Alert>
              </Collapse>
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
