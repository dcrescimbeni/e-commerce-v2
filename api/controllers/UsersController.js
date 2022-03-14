const User = require('../models/User');

exports.userCreate = (req, res, next) => {
  console.log('REQ.Body =>', req.body);
  User.create(req.body)
    .then(() => res.send(200))
    .catch((err) => next(err));
};

// exports.userLoginOAuth = (req,res,next) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
//   .catch(err => next(err));
// }

exports.userLogin = (req, res, next) => {
  res.send(req.user)
  .catch(err => next(err));
  
};

exports.userLogout = (req, res, next) => {
  req.logout();
  res.redirect('/')
  .catch(err => next(err))
};

exports.getUser = (req, res, next) => {
  req.isAuthenticated();
  if (!req.user) res.sendStatus(401);
  res.send(req.user);
};

exports.userEdit = (req, res, next) => {
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
  }).then((users) => res.send(users))
    .catch(err => next(err));
};

exports.giveAdmin = (req, res, next) => {
  User.update(
    { isAdmin: true },
    {
      where: {
        userId: req.params.id,
      },
    }
  ).then((user) => res.send(user))
   .catch(err => next(err));
};
