var config = require("../config.js");
var meli = require('../lib/meli.js');
var meliObject = new meli.Meli(config.client_id,config.secret_key);


exports.productList = function(req, res) {

		console.log('sitio ' + 'sites/' + config.config.site_id +'/categories')
		meliObject.get('sites/' + config.config.site_id +'/categories', function (err, categorias) {
      
       		res.send(categorias);  
		});
};

exports.productNew = function(req, res) {

		console.log('sitio ' + config.config.api_root_url);

		var producto = {
			"title":"Item de test - No Ofertar",
			"category_id":"MLA3530",
			"price":10,
			"currency_id":"ARS",
			"available_quantity":1,
			"buying_mode":"buy_it_now",
			"listing_type_id":"gold_special",
			"description": "Item de test - No Ofertar",
			"video_id": "YOUTUBE_ID_HERE",
			"attributes": [
				{ "id" : "ITEM_CONDITION", "value_id": "2230582"} 
			],
			"sale_terms":[
				{"id": "WARRANTY_TYPE", "value_id": 2230279 },
				{"id": "WARRANTY_TIME", "value_name": "90 dias"}
			],
			"pictures":[
				{"source":"http://mla-s2-p.mlstatic.com/968521-MLA20805195516_072016-O.jpg"}
			]
		};

		meliObject.put(config.config.api_root_url + '/item',producto,'{"access_token":"APP_USR-3265451425852245-101501-5274096e8042797e37ccf9b085a12e5c-1366203"}', function (err, categorias) {
			console.log(err);
      
       		res.send(categorias);  
		});
};