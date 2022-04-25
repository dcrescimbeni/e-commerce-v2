const db = require('../config/db');
const {
  User,
  Product,
  Category,
  Order,
  OrderDetails,
} = require('../models/index');

const users = require('./users');
const products = require('./products');
const { categories, categoriesRelationships } = require('./categories');

const seedDatabase = async () => {
  // ! Force sync
  let forceSync = true;
  await db.sync({ force: forceSync });
  console.log(`Database synced. Force: ${forceSync}`);
  // !

  await User.bulkCreate(users, { individualHooks: true });
  console.log('Users created');

  await Product.bulkCreate(products);
  console.log('Products created');

  await Category.bulkCreate(categories);
  console.log('Categories created');

  await categoriesRelationships.forEach(async (relationship) => {
    await assignCategory(relationship);
  });
  console.log('Relationships created');

  return;
};

seedDatabase();

// const seedDatabase = async () => {
//   await Promise.all(
//     users.map(async (user) => {
//       return await User.create(user);
//     })
//   );

//   // await Product.bulkCreate(products);
//   await Category.bulkCreate(categories);

//   await Promise.all(
//     categoriesRelationships.map(async (relationship) => {
//       return await assignCategory(relationship);
//     })
//   );

//   console.log('Database seeded!');
// };

async function assignCategory(relationship) {
  let product = await Product.findByPk(relationship.productId);
  let category = await Category.findByPk(relationship.categoryId);
  await category.addProducts([product]);
}

// const createOrder = async (order) => {
//   let { userId, address, total } = order;
//   let newOrder = await Order.create({ userId, address, total });

//   order.products.forEach(async (product) => {
//     await fillOrderItems(newOrder.dataValues.orderId, product);
//   });
// };

// const fillOrderItems = async (orderId, items) => {
//   const { productId, qty, price } = items;
//   await OrderDetails.create({ orderId, productId, qty, price });
// };

// seedDatabase();
