var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"))
app.listen(1337);
app.get('/location', function(req, res){

	console.log('Get Request')

	var satelize = require('satelize');
 
// Example retrieve IP from request 
 var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
 //var ip = req.connection.remoteAddress; 

// var io = require("socket.io").listen(1337);

// io.sockets.on("connection", function (socket) {
//     var address = socket.handshake.address;
//     console.log("New connection from " + address.address + ":" + address.port);
// })

//  var ip = require('request-ip');
//  //console.log(ip);
//  console.log(req.connection.remoteAddress);
//  var clientIp;

// // inside middleware handler
// var ipMiddleware = function(req, res, next) {
//     clientIp = ip.getClientIp(req); // on localhost > 127.0.0.1
//     next();
//     //console.log(clientIp);
// };
 
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



console.log("server running");