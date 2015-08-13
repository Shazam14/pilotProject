/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	name: {

  		type: 'string'
  	},

  	phone:{
  		type: 'string',
  		defaultsTo: '111-222-3333'

  	},

  	email: {
  		type: 'string'

  	},

  	address: {
  		type: 'string'
  	},

  	pilotStatus:{
  		type: 'string'
  	}



  }

};

