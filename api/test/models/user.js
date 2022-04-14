require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../../config/db');
const { User } = require('../../models/index');

describe('User model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testUserDetails = {
    password: 'test',
    firstName: 'Test',
    lastName: 'McTestin',
    email: 'test@example.com',
    billingAddress: 'Testing Street 123',
    shippingAddress: 'The Neighbour Address 124',
  };

  describe('User creation', () => {
    describe('Correct user creation', () => {
      it('Can create a new user', () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          billingAddress: testUserDetails.billingAddress,
          shippingAddress: testUserDetails.shippingAddress,
        })
          .then((res) => res.dataValues)
          .then((user) => {
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('password');
            expect(user.password).to.not.equals(testUserDetails.password);
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('lastName', testUserDetails.lastName);
            expect(user).to.have.property('email', testUserDetails.email);
            expect(user).to.have.property(
              'billingAddress',
              testUserDetails.billingAddress
            );
            expect(user).to.have.property(
              'shippingAddress',
              testUserDetails.shippingAddress
            );
          });
      });

      it('PK autoincrements', () => {
        let firstUserId;
        let secondUserId;

        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: 'asdf@asdf.com',
          billingAddress: testUserDetails.billingAddress,
          shippingAddress: testUserDetails.shippingAddress,
        })
          .then((res) => res.dataValues)
          .then((firstUser) => {
            firstUserId = firstUser.userId;
          })
          .then(() => {
            return User.create({
              password: testUserDetails.password,
              firstName: testUserDetails.firstName,
              lastName: testUserDetails.lastName,
              email: 'anothermail@mail.com',
              billingAddress: testUserDetails.billingAddress,
              shippingAddress: testUserDetails.shippingAddress,
            });
          })
          .then((res) => res.dataValues)
          .then((user) => {
            secondUserId = user.userId;
            let idDifference = secondUserId - firstUserId;
            expect(idDifference).to.equal(1);
          });
      });

      it(`If there's no shipping address, it defaults to billing address`, () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .then((user) => {
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('password');
            expect(user.password).to.not.equals(testUserDetails.password);
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('lastName', testUserDetails.lastName);
            expect(user).to.have.property('email', testUserDetails.email);
            expect(user).to.have.property(
              'billingAddress',
              testUserDetails.billingAddress
            );
            expect(user).to.have.property(
              'shippingAddress',
              testUserDetails.billingAddress
            );
          });
      });
    });

    describe('Not null validations', () => {
      it(`Cannot create user without firstName`, () => {
        return User.create({
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          address: testUserDetails.billingAddress,
        })
          .then((user) => expect(user).to.not.exist)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });

      it(`Cannot create user without lastName`, () => {
        return User.create({
          firstName: testUserDetails.firstName,
          email: testUserDetails.email,
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });

      it(`Cannot create user without billing address`, () => {
        return User.create({
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
        })
          .then((res) => res.dataValues)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });

      it(`Cannot create user without email`, () => {
        return User.create({
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .then((user) => expect(user).to.not.exist)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });
    });

    describe('Other validations', () => {
      it('Uniqueness: Cannot create a user with the same email', () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .then(() => {
            return User.create({
              password: testUserDetails.password,
              firstName: testUserDetails.firstName,
              lastName: testUserDetails.lastName,
              email: testUserDetails.email,
              billingAddress: testUserDetails.billingAddress,
            });
          })
          .catch((err) => {
            expect(err.name).to.equal('SequelizeUniqueConstraintError');
          });
      });
      it('Mail validation: Cannot create a user with an invalid username', () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: 'notmail.com',
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .catch((err) => {
            expect(err.errors[0].message).to.equals(
              'Validation isEmail on email failed'
            );
          });
      });

      it('Saves the email in lowercase', () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: 'testMailWithUpperCase@testDomain.com',
          billingAddress: testUserDetails.billingAddress,
          shippingAddress: testUserDetails.shippingAddress,
        })
          .then((res) => res.dataValues)
          .then((user) => {
            const lowerCaseEmail = 'testmailwithuppercase@testdomain.com';
            expect(user).to.have.property('email', lowerCaseEmail);
          });
      });
    });
  });
});
