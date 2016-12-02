/**
* Url.js
*
* @description :: TODO: You might write a short summary of how this type works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/types
*/

module.exports = {

  attributes: {
    country: {
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
    url: {
      model: 'url'
    }
  }
  
};