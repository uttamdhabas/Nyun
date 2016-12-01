module.exports = function(req, res, next) {
  var currentUserId = req.token.sid;
  next();
};
