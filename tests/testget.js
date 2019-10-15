var meli = require('../index.js');
var sys = require("sys");
var config = require("../config.js");
var meliObject = new meli.Meli();

var express = require('express');
var app = express();

var getCategories = function(){
    meliObject.get('sites/' + config.config.site_id +'/categories', function (err, res) {
        console.log(err, res);
    });
};

var getUser = function(){
    meliObject.get('users/145925943', function (err, res) {
     console.log(err, res);
 });
};

var getUsers = function(){
    meliObject.get('users', {
        ids: [145925943, 145925951]
    }, function (err, res) {
        console.log(err, res);
    });
};

var predictCategory = function(){
    var title = "Ipod%20Touch";
    meliObject.get('/sites/'+ config.config.site_id +'/category_predictor/predict?title=' + title, function(err,res){
        console.log(err,res);
    });
};

var getTrends = function(){
    meliObject.get('/sites/'+ config.config.site_id +'/trends/search', function (err, res) {
     console.log(err, res);
 });
};

var examples = {
    1: "Get your country's category tree",
    2: "Get user data",
    3: "Get multiple users at once",
    4: "Predict product category based on it's title",
    5: "Get search trends for your country"
};
function printOptions() {
    console.log("Ingrese un numero:");
    for (var i in examples) {
        console.log(i + ": " + examples[i]);

    }
}

printOptions();
var stdin = process.openStdin();
stdin.addListener("data", function (d) {
    var end = Number(d);
    switch(end){
        case 1: getCategories();
        break;
        case 2: getUser();
        break;
        case 3: getUsers();
        break;
        case 4: predictCategory();
        break;
        case 5: getTrends();
        break;
    }
});
