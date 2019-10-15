var config = require("../config.js");
var meli = require('../lib/meli.js');
var meliObject = new meli.Meli(config.client_id,config.secret_key);


exports.productList = function(req, res) {

		console.log('sitio ' + 'sites/' + config.config.site_id +'/categories')
		meliObject.get('sites/' + config.config.site_id +'/categories', function (err, categorias) {
      
       	res.send(categorias);  
    });

    
      
    
};