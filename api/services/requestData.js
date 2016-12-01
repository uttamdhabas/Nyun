module.exports.getRemoteIP = function(request) {
  var ip = request.headers['x-forwarded-for'] ||
           request.connection.remoteAddress ||
           request.socket.remoteAddress ||             
           request.connection.socket.remoteAddress
 
           return ip;
  }
  
