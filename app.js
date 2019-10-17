var express = require('express');
var app = express();
var config = require("./config.js").config;
var gets = require('./tests/testget.js');
var Meli = require('./lib/meli.js');
const product_controller = require('./controller/product.controller');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    res.render('pages/index', {
        client_id: config.client_id,
        secret_key: config.secret_key,
        redirect_uri: config.redirect_uri,
        site_id: config.site_id,
        appname: req.subdomains,
        Meli:Meli,
    });
});

app.get('/alta_producto', function (req, res) {

    res.render('pages/alta_producto', {
        client_id: config.client_id,
        secret_key: config.secret_key,
        redirect_uri: config.redirect_uri,
        site_id: config.site_id,
        appname: req.subdomains,
        Meli:Meli,
    });
});

app.get('/productos', product_controller.productList);

app.post('/token', product_controller.token);

app.post('/autorizacion', product_controller.autorizacion);



app.use(express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 5000!');
});
