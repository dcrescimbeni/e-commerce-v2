require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../../config/db');
const { Product } = require('../../models/index');

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testProductDetails = {
    name: 'test shoes',
    price: 500,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8bbfd4d-a3c4-4a04-9900-687285e8a82d/air-jordan-1-retro-high-og-zapatillas.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
  };

  describe('Correct product creation', () => {
    it('Can create a new product with all the data', async () => {
      let { name, price, img, description } = testProductDetails;

      let newProduct = await Product.create({ name, price, img, description });

      expect(newProduct.dataValues).to.have.property('name', name);
      expect(newProduct.dataValues).to.have.property('price', price);
      expect(newProduct.dataValues.img[0]).to.equal(img[0]);
      expect(newProduct.dataValues).to.have.property(
        'description',
        description
      );
    });

    it('Can create a product without img', async () => {
      let { name, price, description } = testProductDetails;
      let newProduct = await Product.create({ name, price, description });
      expect(newProduct.dataValues).to.have.property('productId');
    });

    it('Can create a product without description', async () => {
      let { name, price, img } = testProductDetails;
      let newProduct = await Product.create({ name, price, img });
      expect(newProduct.dataValues).to.have.property('productId');
    });
  });

  describe('Not null validations', () => {
    it('Cannot create product without name', async () => {
      try {
        let { price, img, description } = testProductDetails;
        let newProduct = await Product.create({ price, img, description });
        expect(newProduct).to.not.exist();
      } catch (err) {
        expect(err.errors[0].type).to.equals('notNull Violation');
      }
    });

    it('Cannot create product without price', async () => {
      try {
        let { name, img, description } = testProductDetails;
        let newProduct = await Product.create({ name, img, description });
        expect(newProduct).to.not.exist();
      } catch (err) {
        expect(err.errors[0].type).to.equals('notNull Violation');
      }
    });
  });
});
