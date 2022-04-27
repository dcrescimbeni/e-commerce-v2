import React, { useState } from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const WriteReview = ({ openDialog, handleClose, productId }) => {
  const [score, setScore] = useState(0);
  const [reviewMessage, setReviewMessage] = useState('testing react review');

  const handleSendReview = () => {
    if (score > 0 && score <= 5) {
      axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/products/product/${productId}/review`,
        {
          reviewMessage,
          productId,
          score,
        }
      );
      handleClose();
    }
  };

  const handleReviewMessageChange = (e) => {
    setReviewMessage(e.target.value);
  };

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <Container sx={{ marginBottom: 3 }}>
        <DialogTitle>Write a review</DialogTitle>
        <DialogContent>
          <Rating
            value={score}
            onChange={(e, newValue) => {
              setScore(newValue);
            }}
          />
          <TextField
            fullWidth
            label="Review"
            value={reviewMessage}
            onChange={handleReviewMessageChange}
            autoComplete="off"
            sx={{ marginTop: 3 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSendReview}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </DialogActions>
      </Container>
    </Dialog>
  );
};

export default WriteReview;
