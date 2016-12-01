/**
 * UrlController
 *
 * @description :: Server-side logic for managing urls
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Validator = require('validator');
var geoip = require('geoip-lite');
var useragent = require('useragent');
useragent(true);
module.exports = {
  
  create: function(req, res) {
        var currentUserId = req.token.sid;
        target = req.param('target');
        if (target.indexOf('www') === 0) {
          target = 'http://' + target;
        }
    
        // check if the provided target is a valid url
        if (!Validator.isURL(target)) {
          return res.badRequest("The provided url is not valid.");
        }
    
    

        Url.findOne({user:currentUserId,target:target}).exec(function(err, url) {
                if(url){
                   shortID= sails.config.serviceUrl+base58.encode(url.id)

                   return res.send({target:url.target,shortUrl:shortID,hits:(url.hits).toString(),new:0,createdAt:url.createdAt});
                }
                if(!url){
                    Url.create({target: target,user:currentUserId}).exec(function(err, url) {
                      if (err) {return res.status(500).send(err);}
                      shortID= sails.config.serviceUrl+base58.encode(url.id)
                      return res.send({target:url.target,shortUrl:shortID,hits:(url.hits).toString(),new:1,createdAt:url.createdAt});
                    });
                }
                if (err) {return res.status(500).send(err);}
                
          });
    
  },
  
  
  
  redirect: function(req, res) {
    var key = req.param('key');
    
    
    id=base58.decode(key)
   
    Url.findOne(id).exec(function(err, url) {
      if (err || url==undefined) {
        return res.json(404, {err: 'Page Not Found'});
      }
      
      else{
        
        console.log(url.target)
        res.redirect(url.target);
        hits=url.hits+1;
        Url.update({id:id},{hits:hits}).exec(function afterwards(err, updated){

              if (err) {
                return res.status(500).send(err);
                
              }

              
            });
        var geo_location = geoip.lookup(requestData.getRemoteIP(req));

        console.log(geo_location);
        var agent = useragent.lookup(req.headers['user-agent']);
        var os=agent.os.toString();
        var browser=agent.toAgent();
        console.log(os,browser)
      }
      
    });
  }
  
};