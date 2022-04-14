const users = require('./users');

const orders = [
  {
    userId: 5,
    address: users[4].shippingAddress,
    total: 1,
    products: [
      {
        productId: 9,
        qty: 5,
        price: 108,
      },
      {
        productId: 5,
        qty: 5,
        price: 108,
      },
      {
        productId: 3,
        qty: 4,
        price: 117,
      },
      {
        productId: 8,
        qty: 4,
        price: 134,
      },
      {
        productId: 3,
        qty: 3,
        price: 112,
      },
    ],
  },
  {
    userId: 6,
    address: users[5].shippingAddress,
    total: 1,
    products: [
      {
        productId: 7,
        qty: 3,
        price: 128,
      },
    ],
  },
  {
    userId: 5,
    address: users[4].shippingAddress,
    total: 1,
    products: [
      {
        productId: 4,
        qty: 1,
        price: 103,
      },
      {
        productId: 8,
        qty: 4,
        price: 137,
      },
    ],
  },
  {
    userId: 4,
    address: users[3].shippingAddress,
    total: 1,
    products: [
      {
        productId: 8,
        qty: 5,
        price: 126,
      },
      {
        productId: 7,
        qty: 1,
        price: 137,
      },
      {
        productId: 2,
        qty: 5,
        price: 102,
      },
    ],
  },
  {
    userId: 3,
    address: users[2].shippingAddress,
    total: 1,
    products: [
      {
        productId: 8,
        qty: 3,
        price: 140,
      },
      {
        productId: 8,
        qty: 3,
        price: 105,
      },
      {
        productId: 7,
        qty: 2,
        price: 121,
      },
      {
        productId: 5,
        qty: 1,
        price: 102,
      },
    ],
  },
  {
    userId: 5,
    address: users[4].shippingAddress,
    total: 1,
    products: [
      {
        productId: 5,
        qty: 4,
        price: 138,
      },
      {
        productId: 8,
        qty: 1,
        price: 134,
      },
    ],
  },
];
