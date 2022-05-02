const Order = require('../models/Order');
const User = require('../models/User');
const OrderDetails = require('../models/OrderDetails');

exports.createOrder = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { userId: req.params.id } });

    console.log('req.body');
    console.log(req.body);

    if (!user) throw new Error('User not found');

    const orderObj = {
      address: req.body.address,
      total: req.body.total,
      userId: req.params.id,
    };

    let newOrder = await Order.create(orderObj);

    await req.body.products.map(async (product) => {
      product.orderId = newOrder.dataValues.orderId;
      await OrderDetails.create(product);
    });

    res.send(200);
  } catch (err) {
    next(err);
  }
};
