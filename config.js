/**
 * Created with JetBrains WebStorm.
 * User: santiago
 * Date: 16/09/13
 * Time: 20:37
 * To change this template use File | Settings | File Templates.
 */
require('dotenv').config();

var config = {

	api_root_url: 'https://api.mercadolibre.com',
	skd_version: 'MELI-NODE-SDK-0.0.15',
	auth_url: 'https://auth.mercadolibre.com/authorization',
	oauth_url: 'https://api.mercadolibre.com/oauth/token',
	client_id :  process.env.App_ID,
	secret_key : process.env.Secret_Key,
	redirect_uri : process.env.Redirect_URI,
	site_id : 'MLA'
};

exports.config = config;
