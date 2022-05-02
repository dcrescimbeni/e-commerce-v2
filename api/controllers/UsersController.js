const nodemailer = require('nodemailer');
const { transport } = require('../config/email');
const User = require('../models/User');
const { Order, OrderDetails } = require('../models');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.userCreate = (req, res, next) => {
  User.create(req.body)
    .then(() => res.send(200))
    .catch((err) => next(err));
};

exports.userLogin = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An error occurred.');

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = {
          userId: user.dataValues.userId,
          email: user.dataValues.email,
          isAdmin: user.dataValues.isAdmin,
          firstName: user.dataValues.firstName,
        };
        const token = jwt.sign({ user: body }, 'TOP_SECRET');

        return res.json({
          token,
          userId: user.dataValues.userId,
          firstName: user.dataValues.firstName,
          lastName: user.dataValues.lastName,
          email: user.dataValues.email,
          billingAddress: user.dataValues.billingAddress,
          shippingAddress: user.dataValues.shippingAddress,
          isAdmin: user.dataValues.isAdmin,
        });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

exports.userLogout = (req, res, next) => {
  res.send({ message: 'logout' });
};

exports.getUser = (req, res, next) => {
  console.log(req.user);
  res.send({
    message: 'secret route',
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    billingAddress: req.user.billingAddress,
    shippingAddress: req.user.shippingAddress,
    isAdmin: req.user.isAdmin,
  });
};

exports.getOwnDetails = async (req, res, next) => {
  try {
    const { userId } = req.user;
    let user = await User.findByPk(userId);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

exports.editOwnUser = (req, res, next) => {
  const { userId } = req.user;

  User.update(req.body, {
    where: {
      userId,
    },
  })
    .then(() => res.send(204))
    .catch((err) => next(err));
};

exports.userDelete = (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.send(204))
    .catch((err) => next(err));
};

exports.getUsers = (req, res, next) => {
  User.findAll({
    where: {
      isAdmin: false,
    },
  })
    .then((users) => res.send(users))
    .catch((err) => next(err));
};

exports.giveAdmin = (req, res, next) => {
  User.update(
    { isAdmin: true },
    {
      where: {
        userId: req.params.id,
      },
    }
  )
    .then((user) => res.send(user))
    .catch((err) => next(err));
};

exports.sendEmail = (req, res, next) => {
  console.log('llegue a mail');
  // async function main() {
  //   let mailOptions = {
  //     from: '"SNikers 👻" <fabriberdina@gmail.com>', // sender address
  //     to: req.body.email, // list of receivers
  //     subject: 'Su Pedido ha sido realizado ✔', // Subject line
  //     html: '<b>Gracias por su compra en SNikers</b>', // html body
  //   };

  //   let info = await transport.sendMail(mailOptions, (err, info) => {
  //     if (err) res.status(500).send(err.message);
  //     else {
  //       console.log('email enviado');
  //       res.send(200);
  //     }
  //   });
  // }
  // main().catch(console.error);
};

exports.getOrders = (req, res, next) => {
  Order.findAll({
    include: OrderDetails,
    where: { userId: req.params.id },
  }).then((data) => {
    res.send(data);
  });
};

// exports.getOrders = (req,res,next) => {
//   Order.findAll({where: { userId: req.params.id }})
//   .then(data => {
//     res.send(data)
//   })
// }

// Admin controllers

exports.getOneUser = async (req, res, next) => {
  try {
    let user = await User.findOne({ where: { userId: req.params.id } });
    res.send(user);
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = (req, res, next) => {
  User.findAll({ attributes: { exclude: ['password'] } })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => next(err));
};

exports.editUser = async (req, res, next) => {
  let adminId = req.user.dataValues.userId;
  let userId = parseInt(req.params.id);

  try {
    if (adminId === userId && req.body.isAdmin === false) {
      throw new Error('Cannot revoke admin access to itself');
    }

    let updatedUser = await User.update(req.body, {
      where: {
        userId: req.params.id,
      },
      returning: true,
    });
    res.send(updatedUser[1][0]);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = (req, res, next) => {
  let adminId = req.user.dataValues.userId;
  let userId = parseInt(req.params.id);

  if (adminId === userId) {
    let err = new Error('Cannot delete own user');
    return next(err);
  }

  User.destroy({
    where: {
      userId: req.params.id,
    },
  })
    .then((response) => {
      const result = { deletedEntries: response };
      res.status(202).send(result);
    })
    .catch((err) => next(err));
};
