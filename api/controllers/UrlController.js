/**
 * UrlController
 *
 * @description :: Server-side logic for managing urls
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var shortid = require('shortid');

module.exports = {
  
  create: function(req, res) {
    var key = req.param('key'),
        target = req.param('target'),
        regexp = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    
    // append http if no protocol was specified  
    if (target.indexOf('www') === 0) {
      target = 'http://' + target;
    }
    
    // check if the provided target is a valid url
    if (regexp.test(target) !== true) {
      return res.badRequest("The provided url is not valid.");
    }
    
    // if no vanity key was specified, generate a key
    if(key === undefined) {
      key = shortid.generate();
    }

    // insert the entry into the db
    Url.create({key: key, target: target}).exec(function(err, url) {
      if (err) {return res.status(500).send(err);}
      return res.send(url);
    });
  },
  
  find: function(req, res) {
    var key = req.param('key');
    console.log(req.headers)
    Url.findOne({ key: key }).exec(function(err, url) {
      if (err) {return res.status(500).send(err);}
      return res.send(url);
    });
  },
  
  redirect: function(req, res) {
    var key = req.param('key');
    var ip = req.headers['x-forwarded-for'] ||
           req.connection.remoteAddress ||
           req.socket.remoteAddress ||             
           req.connection.socket.remoteAddress
  
    console.log(ip);
    Url.findOne({ key: key }).exec(function(err, url) {
      if (err || url==undefined) {
        return res.json(401, {err: 'Page Not Found'});
      }
      
      else{
        res.redirect(url.target);
      }
      
    });
  }
  
};