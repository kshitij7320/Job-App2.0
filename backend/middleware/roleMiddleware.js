const allowedRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403);
      return next(new Error("You do not have permission for this action"));
    }

    next();
  };
};

module.exports = allowedRoles;
