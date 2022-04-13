require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../../config/db');
const { Size, Product } = require('../../models/index');

describe('Size model', () => {
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

  it('Can add a size to a product', async () => {
    await Product.create(testProductDetails);
    await Size.create({ size: 41, productId: 1 });
    await Size.create({ size: 40, productId: 1 });

    let foundProduct = await Product.findByPk(1, { include: Size });
    expect(foundProduct.dataValues.sizes).to.have.lengthOf(2);
  });

  it('Cannot add two times the same size to a product', async () => {
    try {
      await Product.create(testProductDetails);
      await Size.create({ size: 41, productId: 1 });

      let duplicatedSize = await Size.create({ size: 41, productId: 1 });
      expect(duplicatedSize).to.not.exist();
    } catch (err) {
      expect(err.errors[0].message).to.equal(
        'Cannot add more than one size to the same product'
      );
    }
  });

  it('Cannot add a null size', async () => {
    try {
      let newSize = await Size.create({ productId: 1 });
      expect(newSize).to.not.exist();
    } catch (err) {
      expect(err.errors[0].type).to.equal('notNull Violation');
    }
  });

  it('Cannot add a size without a product', async () => {
    try {
      let newSize = await Size.create({ size: 40 });
      expect(newSize).to.not.exist();
    } catch (err) {
      expect(err.errors[0].type).to.equal('notNull Violation');
    }
  });
});
