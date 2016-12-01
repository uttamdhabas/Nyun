/**
* Url.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    ip: {
      type: 'string'
      

      
    },
    location: {
      type: 'string'
      
    },

    referrer:{
      type:'string'
    },

    browser:{
      type:'string'
    },
    os:{
      type:'string'
    },
    device:{
      type:'string'
    },


    url: {
      model: 'url'
    }
  }
  
};