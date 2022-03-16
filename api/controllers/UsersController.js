const User = require('../models/User');

const nodemailer = require('nodemailer');
const { transport } = require('../config/email');
const { Order } = require('../models');

exports.userCreate = (req, res, next) => {
  User.create(req.body)
    .then(() => res.send(200))
    .catch((err) => next(err));
};

// exports.userLoginOAuth = (req,res,next) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
//   .catch(err => next(err));
// }

exports.userLogin = (req, res, next) => {
  res.send(req.user);
};

exports.userLogout = (req, res, next) => {
  req.logout();
  res.redirect('/').catch((err) => next(err));
};

exports.getUser = (req, res, next) => {
  req.isAuthenticated();
  if (!req.user) res.sendStatus(401);
  else {
    res.send(req.user);
  }
};

exports.editOwnUser = (req, res, next) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
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
  async function main() {
    let mailOptions = {
      from: '"SNikers 👻" <fabriberdina@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: 'Su Pedido ha sido realizado ✔', // Subject line
      html: '<b>Gracias por su compra en SNikers</b>', // html body
    };

    let info = await transport.sendMail(mailOptions, (err, info) => {
      if (err) res.status(500).send(err.message);
      else {
        console.log('email enviado');
        res.send(200);
      }
    });
  }
  main().catch(console.error);
};

exports.getOrders = (req, res, next) => {
  Order.findAll({ where: { userId: req.params.id } })
    .then((orders) => res.status(200).send(orders))
    .catch((err) => next(err));
};

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

exports.editUser = (req, res, next) => {
  let adminId = req.user.dataValues.userId;
  let userId = parseInt(req.params.id);

  if (adminId === userId && req.body.isAdmin === false) {
    let err = new Error('Cannot revoke admin access to itself');
    return next(err);
  }

  User.update(req.body, {
    where: {
      userId: req.params.id,
    },
    returning: true,
  })
    .then((user) => res.send(user[1]))
    .catch((err) => next(err));
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
