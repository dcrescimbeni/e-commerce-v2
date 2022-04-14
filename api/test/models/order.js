require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../../config/db');
const { Order } = require('../../models/index');

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testOrder = {
    total: 500,
    address: 'test address 123',
  };

  it('Can create a new order', async () => {
    let { total, address } = testOrder;
    let newOrder = await Order.create({ total, address });
    expect(newOrder.dataValues).to.have.property('total', total);
    expect(newOrder.dataValues).to.have.property('address', address);
  });

  it('Cannot create an order without total', async () => {
    let { address } = testOrder;
    try {
      let newOrder = await Order.create({ address });
      expect(newOrder).to.not.exist();
    } catch (err) {
      expect(err.errors[0].type).to.equals('notNull Violation');
    }
  });

  it('Cannot create an order without address', async () => {
    let { total } = testOrder;
    try {
      let newOrder = await Order.create({ total });
      expect(newOrder).to.not.exist();
    } catch (err) {
      expect(err.errors[0].type).to.equals('notNull Violation');
    }
  });
});
