/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Validator = require('validator')
module.exports = {

  authenticate: function(req, res) {
    console.log(req.headers)
    var email = req.param('email');
    var password = req.param('password');

    if (!email || !password) {
      return res.json(401, {err: 'username and password required'});
    }

    User.findOneByEmail(email, function(err, user) {
      if (!user) {
        return res.json(401, {err: 'invalid username or password'});
      }

      User.validPassword(password, user, function(err, valid) {
        if (err) {
          return res.json(403, {err: 'forbidden'});
        }

        if (!valid) {
          return res.json(401, {err: 'invalid username or password'});
        } else {
          res.json({user: user, token: sailsTokenAuth.issueToken({sid: user.id})});
        }
      });
    })
  },


  register: function(req, res) {
    var email=req.param('email');
    var password=req.param('password');
    var confirmPassword=req.param('confirmPassword');

    if (Validator.isEmpty(email)) {
      return res.json(401, {err: 'Email is required'});
    }
    if (!Validator.isEmail(email)) {
      return res.json(401, {err: 'Email is invalid'});
    }
    if (Validator.isEmpty(password)) {
      return res.json(401, {err: 'password is required'});
    }
    if (Validator.isEmpty(confirmPassword)) {
      return res.json(401, {err: 'confirmPassword is required'});
    }
    if (!Validator.equals(password,confirmPassword)) {
      return res.json(401, {err: 'Password doesn\'t match'});
    }
    

    User.create({email: email, password: password}).exec(function(err, user) {
      if (err) {
        res.json(err.status, {err: err});
        return;
      }
      if (user) {
        res.json(201,{user: user, token: sailsTokenAuth.issueToken({sid: user.id})});
      }
    });
  },


  check: function(req, res) {
    var email= req.param('email');
    
    if (Validator.isEmpty(email)) {
      return res.json(401, {err: 'Email is required'});
    }
    if (!Validator.isEmail(email)) {
      return res.json(401, {err: 'Email is invalid'});
    }
    User.findOneByEmail(email, function(err, user) {
      if(!user){
        return res.json({err: 'User doesn\'t exist'});
      }
      if (err) {
        res.json(err.status, {err: err});
        return;
      }
      return res.json({status:"User exist"});
    })
    
  }
};