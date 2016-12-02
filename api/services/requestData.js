var geoip = require('geoip-lite');
var useragent = require('useragent');
useragent(true);
var browserID="";
var osID="";
var countryID="";
var referrerID="";
getRemoteIP = function(req) {
  var ip = req.headers['x-forwarded-for'] ||
           req.connection.remoteAddress ||
           req.socket.remoteAddress ||             
           req.connection.socket.remoteAddress
 
           return ip;
  }
 
 module.exports.saveData=function(req,urlID){
 		//get all request data
 		
 		var IP=getRemoteIP(req);
 		var geo_location = geoip.lookup(IP);
 		var agent = useragent.lookup(req.headers['user-agent']);
 		var os=agent.os.toString();
 		var lastIndex = os.lastIndexOf(" ");
		os = os.substring(0, lastIndex);
        var browser=agent.toAgent();
        var lastIndex = browser.lastIndexOf(" ");
		browser = browser.substring(0, lastIndex);
		var country;
		if(geo_location){country= geo_location.country};
		var referer= req.headers['referer']
		if(!referer){referer="direct"}

		
        
        console.log(osID,browserID,countryID,referrerID,urlID)
   		Request.create({referrer:referrerID,browser:browserID,os:osID,country:countryID,url:urlID}).exec(function(err, r) {
						if (err) {return res.status(500).send(err);}
						
					});

}