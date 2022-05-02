exports.checkAdmin = (req, res, next) => {
  if (!req.user.isAdmin) throw new Error('User is not an admin');
  next();
};
