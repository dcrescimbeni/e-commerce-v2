const { sign } = require('jsonwebtoken');

const createAccessToken = (userId) => {
  return sign({ userId }, 'secret', {
    expiresIn: '15m',
  });
};

const createRefreshToken = (userId) => {
  return sign({ userId }, 'secret_refresh', {
    expiresIn: '7d',
  });
};

const sendAccessToken = (req, res, accessToken) => {
  res.send({
    accessToken,
    email: req.body.email,
  });
};

const sendRefreshToken = (res, refreshToken) => {
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    path: '/refresh_token',
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
};
