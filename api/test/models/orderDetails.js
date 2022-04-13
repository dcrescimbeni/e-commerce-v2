require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../../config/db');
const { OrderDetails } = require('../../models/index');

describe('OrderDetails model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testOrderDetails = {
    quantity: 10,
    price: 130,
  };

  it('Can create OrderDetails', async () => {
    let { quantity, price } = testOrderDetails;
    let newOrderDetails = await OrderDetails.create({ quantity, price });
    expect(newOrderDetails.dataValues).to.have.property('quantity', quantity);
    expect(newOrderDetails.dataValues).to.have.property('price', price);
  });

  it('Cannot create OrderDetails without quantity', async () => {
    let { price } = testOrderDetails;
    try {
      let newOrderDetails = await OrderDetails.create({ price });
      expect(newOrderDetails.dataValues).to.not.exist();
    } catch (err) {
      expect(err.errors[0].type).to.equals('notNull Violation');
    }
  });

  it('Cannot create OrderDetails without price', async () => {
    let { quantity } = testOrderDetails;
    try {
      let newOrderDetails = await OrderDetails.create({ quantity });
      expect(newOrderDetails.dataValues).to.not.exist();
    } catch (err) {
      expect(err.errors[0].type).to.equals('notNull Violation');
    }
  });
});
