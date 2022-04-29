const db = require('../config/db');
const {
  User,
  Product,
  Category,
  Review,
  Order,
  OrderDetails,
} = require('../models/index');

const users = require('./users');
const products = require('./products');
const reviews = require('./reviews');
const { categories, categoriesRelationships } = require('./categories');

async function sequentialCreate(model, data) {
  data.forEach(async (row) => {
    await model.create(row);
  });
}

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

  categoriesRelationships.forEach(async (relationship) => {
    await assignCategory(relationship);
  });
  console.log('Relationships created');

  sequentialCreate(Review, reviews);

  // await Review.bulkCreate(reviews, { hooks: true, individualHooks: true });
  console.log('Reviews created');

  return;
};

seedDatabase();

async function assignCategory(relationship) {
  let product = await Product.findByPk(relationship.productId);
  let category = await Category.findByPk(relationship.categoryId);
  await category.addProducts([product]);
}
