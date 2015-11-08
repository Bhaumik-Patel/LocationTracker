var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');

});

var server = app.listen(1337, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + "/public"))
// app.listen(3000);

//  var io = require('socket.io').listen(3000);

// // io.sockets.on('connection', function (socket) {
// //   var address = socket.handshake.address;
// //   console.log('New connection from ' + address.address + ':' + address.port);
// // });

// io.sockets.on('connection', function(socket) {
//     var socketId = socket.id
//     var clientIp = socket.request.connection.remoteAddress

//     console.log(clientIp)
// })


// app.get('/location', function(req, res){

// 	console.log('Get Request')

// 	var satelize = require('satelize');
 
// // Example retrieve IP from request 
//  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

//  //var ip = req.connection.remoteAddress; 

// // var getIP = require('ipware')().get_ip;

// // app.use(function(req, res, next) {
// //     var ipInfo = getIP(req);
// //     console.log(ipInfo);
// //     // { clientIp: '127.0.0.1', clientIpRoutable: false }
// //     next();
// // })

// // io.sockets.on("connection", function (socket) {
// //     var address = socket.handshake.address;
// //     console.log("New connection from " + address.address + ":" + address.port);
// // })

// //  var ip = require('request-ip');
// //  //console.log(ip);
// //  console.log(req.connection.remoteAddress);
// //  var clientIp;

// // // inside middleware handler
// // var ipMiddleware = function(req, res, next) {
// //     clientIp = ip.getClientIp(req); // on localhost > 127.0.0.1
// //     next();
// //     //console.log(clientIp);
// // };
 
// // then satelize call  

// // var io = require('socket.io').listen(1337);
// // io.sockets.on('connection', function (socket) {
// //   var endpoint = socket.manager.handshaken[socket.id].address;
// //   console.log('Client connected from: ' + endpoint.address + ":" + endpoint.port);
// // });

 
// satelize.satelize(ip, function(err, geoData) {
//   // process err 
  
//   // if data is JSON, we may wrap it in js object 
//   var obj = JSON.parse(geoData);
//   res.json(obj);
  
//   // if used with expressjs 
//   // res.send(geoData); 
//   // res.json... 
// });


// });

// //ip.listen(1337);


// console.log("server running");
