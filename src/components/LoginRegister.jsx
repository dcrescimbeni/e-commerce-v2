import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

function LoginRegister() {
  let navigate = useNavigate();

  return (
    <ButtonGroup variant="text" color="clear">
      <Button onClick={() => navigate('/login')}>Login</Button>
      <Button
        sx={{ whiteSpace: 'nowrap' }}
        onClick={() => navigate('/register')}
      >
        Sign up
      </Button>
    </ButtonGroup>
  );
}

export default LoginRegister;
