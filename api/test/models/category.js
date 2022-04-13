require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../../config/db');
const { Category } = require('../../models/index');

describe('Category model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testCategoryDetails = {
    name: 'test category',
  };

  it('Can create a new category', async () => {
    let { name } = testCategoryDetails;
    let newCategory = await Category.create({ name });
    expect(newCategory.dataValues).to.have.property('name', name);
  });

  it('Cannot create a category without name', async () => {
    try {
      await Category.create({});
    } catch (err) {
      expect(err.errors[0].type).to.equals('notNull Violation');
    }
  });
});
