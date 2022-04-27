import React from 'react';
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

const WriteReview = ({ openDialog, handleClose }) => {
  const handleSendReview = () => {
    console.log('review sent!');
    handleClose();
  };

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <Container sx={{ marginBottom: 3 }}>
        <DialogTitle>Write a review</DialogTitle>
        <DialogContent>
          <Rating />
          <TextField fullWidth label="Review" sx={{ marginTop: 3 }} />
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
