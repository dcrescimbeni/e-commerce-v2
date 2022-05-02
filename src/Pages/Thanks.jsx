import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Thanks = ({ cartItems, setCartItems }) => {
  const handleStorage = () => {
    localStorage.removeItem('cart-products');
    setCartItems([]);
  };

  useEffect(() => {
    handleStorage();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <section className="container mt-5">
        <div className="card-body">
          <div className="jumbotron text-center">
            <h1 className="display-3">Thanks For Your Order!</h1>

            <p className="lead">
              <Link
                to="/"
                className="btn btn-primary btn-sm"
                role="button"
                onClick={handleStorage}
              >
                Keep Buying
              </Link>
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Thanks;
