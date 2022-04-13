require('mocha');
require('../../config/db');
const chai = require('chai');
const expect = chai.expect;
const app = require('../../server');
const supertest = require('supertest');
let agent;
const db = require('../../config/db');

beforeEach('Initializes supertest', () => {
  agent = supertest(app);
  return db.sync({ force: true });
});

describe('Routes User', () => {
  const testUserDetails = {
    password: 'test',
    firstName: 'Test',
    lastName: 'McTestin',
    email: 'test@example.com',
    billingAddress: 'Testing Street 123',
    shippingAddress: 'The Neighbour Address 124',
  };

  describe('User creation', () => {
    it('Can create a user with all the data', async () => {
      await agent.post('/api/users/register').send(testUserDetails).expect(200);
    });
  });

  // TODO
  describe('User authentication', () => {
    it('Can login', () => {});
    it('Can logout', () => {});
    it('Cannot login with incorrect credentials', () => {});
    it('Get user returns user if logged in', () => {});
    it('Get user returns undefined if not logged in', () => {});
    it('Can login with uppercase email', () => {});
  });
});
