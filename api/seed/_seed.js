const db = require('../config/db');
const { User, Product, Category, Review } = require('../models/index');

const users = require('./users');
const products = require('./products');
const reviews = require('./reviews');
const { categories, categoriesRelationships } = require('./categories');

async function sequentialCreate(model, data) {
  await Promise.all(
    data.map(async (row) => {
      await model.create(row);
    })
  );
  // data.forEach(async (row) => {
  //   await model.create(row);
  // });
}

const seedDatabase = async () => {
  // ! Force sync
  let forceSync = true;
  await db.sync({ force: forceSync });
  console.log(`Database synced. Force: ${forceSync}`);
  // !

  await sequentialCreate(User, users);
  console.log('Users created');

  await sequentialCreate(Product, products);
  console.log('Products created');

  await sequentialCreate(Category, categories);
  console.log('Categories created');

  await Promise.all(
    categoriesRelationships.map(async (relationship) => {
      await assignCategory(relationship);
    })
  );
  console.log('Relationships created');

  await sequentialCreate(Review, reviews);
  console.log('Reviews created');

  return;
};

seedDatabase();

async function assignCategory(relationship) {
  let product = await Product.findByPk(relationship.productId);
  let category = await Category.findByPk(relationship.categoryId);
  await category.addProducts([product]);
}
