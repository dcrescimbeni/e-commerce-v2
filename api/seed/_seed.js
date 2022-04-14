const {
  User,
  Product,
  Category,
  Order,
  OrderDetails,
} = require('../models/index');

// Users
let users = [
  {
    // ID: 1
    email: 'admin@admin.com',
    password: '123',
    firstName: 'Mr Admin',
    lastName: 'Istrator',
    isAdmin: true,
    billingAddress: 'Important Building 123',
    shippingAddress: 'Not so Important Building 123',
  },
  {
    // ID: 2
    email: 'user@user.com',
    password: '123',
    firstName: 'User',
    lastName: 'Common',
    isAdmin: false,
    billingAddress: 'Common house 123',
    shippingAddress: 'Neighbours house 321',
  },
  {
    // ID: 3
    email: 'pharetra.nam@icloud.couk',
    password: 'CLU85YKG1IO',
    firstName: 'Elvis',
    lastName: 'Wagner',
    isAdmin: false,
    billingAddress: '250-8673 Lectus Ave',
    shippingAddress: '157-812 Nisl Road',
  },
  {
    // ID: 4
    email: 'taciti.sociosqu@aol.net',
    password: 'VUH43RDE7YE',
    firstName: 'Lucas',
    lastName: 'Gentry',
    isAdmin: false,
    billingAddress: 'P.O. Box 973, 6934 Fusce Av.',
    shippingAddress: '451-6556 Pellentesque St.',
  },
  {
    // ID: 5
    email: 'ac.urna@google.edu',
    password: 'KEA66UKB1YG',
    firstName: 'Ira',
    lastName: 'Moran',
    isAdmin: false,
    billingAddress: '231-5240 Tempor Ave',
    shippingAddress: 'P.O. Box 581, 4491 Accumsan Road',
  },
  {
    // ID: 6
    email: 'nec@icloud.net',
    password: 'ACQ37IVL9KO',
    firstName: 'Lynn',
    lastName: 'Guzman',
    isAdmin: true,
    billingAddress: '628-1737 Eu St.',
    shippingAddress: '315-4089 Elit, Rd.',
  },
  {
    // ID: 7
    email: 'tempor@google.net',
    password: 'LWF18IEV6MY',
    firstName: 'Audrey',
    lastName: 'Goodwin',
    isAdmin: true,
    billingAddress: 'Ap #100-8810 Tincidunt Rd.',
    shippingAddress: 'Ap #591-8039 Adipiscing. Rd.',
  },
];

// Categories
const categories = [{ name: 'woman' }, { name: 'man' }, { name: 'kids' }];

// Categories relationships
const categoriesRelationships = [
  { productId: 1, categoryId: 2 },
  { productId: 2, categoryId: 1 },
  { productId: 3, categoryId: 2 },
  { productId: 4, categoryId: 1 },
  { productId: 5, categoryId: 3 },
  { productId: 6, categoryId: 1 },
  { productId: 7, categoryId: 1 },
  { productId: 8, categoryId: 1 },
  { productId: 9, categoryId: 2 },
];

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

const seedDatabase = async () => {
  await Promise.all(
    users.map(async (user) => {
      return await User.create(user);
    })
  );

  // await Product.bulkCreate(products);
  await Category.bulkCreate(categories);

  await Promise.all(
    categoriesRelationships.map(async (relationship) => {
      return await assignCategory(relationship);
    })
  );

  console.log('Database seeded!');
};

const assignCategory = async (relationship) => {
  let product = await Product.findByPk(relationship.productId);
  let category = await Category.findByPk(relationship.categoryId);
  await category.addProducts([product]);
};

const createOrder = async (order) => {
  let { userId, address, total } = order;
  let newOrder = await Order.create({ userId, address, total });

  order.products.forEach(async (product) => {
    await fillOrderItems(newOrder.dataValues.orderId, product);
  });
};

const fillOrderItems = async (orderId, items) => {
  const { productId, qty, price } = items;
  await OrderDetails.create({ orderId, productId, qty, price });
};

seedDatabase();
