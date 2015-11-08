var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"))

app.listen(1337);
//console.log("server is running");

app.get('/location', function(req, res){

	//console.log('Get Request for ' + req.connection.remoteAddress);
	GetLocationDetails(req, res);

});

function GetLocationDetails(req, res)
{
var satelize = require('satelize');
 
// Example retrieve IP from request 
var ip = req.header('x-forwarded-for') || req.connection.remoteAddress; 
 
satelize.satelize({ip:req.connection.remoteAddress}, function(err, geoData) {

var obj = JSON.parse(geoData);
res.json(obj);

});
}

