var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"))
app.get('/location', function(req, res){

	console.log('Get Request')

	var satelize = require('satelize');
 
// Example retrieve IP from request 
 //var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
 //var ip = req.connection.remoteAddress; 

 var ip = require('request-ip');

// inside middleware handler
var ipMiddleware = function(req, res, next) {
    var clientIp = ip.getClientIp(req); // on localhost > 127.0.0.1
    next();
};
 
// then satelize call  
 
satelize.satelize(ip, function(err, geoData) {
  // process err 
  
  // if data is JSON, we may wrap it in js object 
  var obj = JSON.parse(geoData);
  res.json(obj);
  
  // if used with expressjs 
  // res.send(geoData); 
  // res.json... 
});


});


app.listen(1337);
console.log("server running");