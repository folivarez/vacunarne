var config = require("../config.js");
var meli = require('../lib/meli.js');
var meliObject = new meli.Meli(config.client_id,config.secret_key);


exports.productList = function(req, res) {

		console.log('sitio ' + 'sites/' + config.config.site_id +'/categories')
		meliObject.get('sites/' + config.config.site_id +'/categories', function (err, categorias) {
      
       		res.send(categorias);  
		});
};


exports.token = function(req, res) {

		meliObject.getAuthURL('https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=' + config.client_id);
};


exports.autorizacion = function(req, res) {

		console.log(req,res);
};
