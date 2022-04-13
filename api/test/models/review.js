require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../../config/db');
const { Review } = require('../../models/index');

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testReview = {
    reviewMessage: 'test review',
    score: 4,
  };

  describe('Correct review creation', () => {
    it('Can create a review', async () => {
      let { reviewMessage, score } = testReview;
      let newReview = await Review.create({ reviewMessage, score });
      expect(newReview.dataValues).to.have.property(
        'reviewMessage',
        reviewMessage
      );
      expect(newReview.dataValues).to.have.property('score', score);
    });

    it('Can create a review without review message', async () => {
      let { score } = testReview;
      let newReview = await Review.create({ score });
      expect(newReview.dataValues).to.have.property('score', score);
    });
  });

  describe('Validations', () => {
    it('Cannot create a review without score', async () => {
      let { reviewMessage } = testReview;
      try {
        let newReview = await Review.create({ reviewMessage });
        expect(newReview.dataValues).to.not.exist();
      } catch (err) {
        expect(err.errors[0].type).to.equal('notNull Violation');
      }
    });

    it('Cannot create a review with score less than 1', async () => {
      let { reviewMessage } = testReview;

      try {
        let newReview = await Review.create({ reviewMessage, score: 0 });
        expect(newReview.dataValues).to.not.exist();
      } catch (err) {
        expect(err.errors[0].message).to.equal(
          'Validation min on score failed'
        );
      }
    });

    it('Cannot create a review with score greater than 5', async () => {
      let { reviewMessage } = testReview;

      try {
        let newReview = await Review.create({ reviewMessage, score: 6 });
        expect(newReview.dataValues).to.not.exist();
      } catch (err) {
        expect(err.errors[0].message).to.equal(
          'Validation max on score failed'
        );
      }
    });
  });
});
