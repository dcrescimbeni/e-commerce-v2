import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../Hooks/useInputs';
import { sendLogoutRequest } from '../state/user';
import { sendLoginRequest } from '../state/user';
import { GiConverseShoe } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import style from '../styles/Login.module.css';
import { getSession } from '../state/user';

const Login = () => {
  const inputEmail = useInput();
  const inputPassword = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    dispatch(sendLogoutRequest());
  };

  React.useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  const user = useSelector((state) => {
    return state.user;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    dispatch(sendLoginRequest(form));
    if (user) navigate('/');
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  // const Submit = (e) => {
  //   e.preventDefault();
  //   navigate("/")
  // };

  return (
    <div className={style.masthead}>
      <br />
      <br />
      <br />

      <div className="color-overlay d-flex justify-content-center align-items-center">
        <div className="containerForm">
          <Form onSubmit={handleSubmit} className="rounded p-4 p-sm-3">
            <Form.Group
              onSubmit={handleSubmit}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                {...inputEmail}
                type="email"
                placeholder="Enter Email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...inputPassword}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check tupe="checkbox" label="Remember Me"></Form.Check>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Submit
              </Button>
            </div>
            <br></br>
            <p>You don't have an account?</p>
            <Link to="/register">
              <div className="d-flex justify-content-center">
                <b>Register</b>
              </div>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
