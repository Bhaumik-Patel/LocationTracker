/************************************************
FILENAME
server_simple.js
DESCRIPTION
creates a simple web server that
display "Hello Dynamic World Wide Web"
HOW TO START SERVER:
1) from terminal run 'node simple_server.js'
2) open web browser visit http://127.0.0.1:8080
*************************************************/

// Include the HTTP Node library
// http://nodejs.org/docs/latest/api/http.html
var http = require('http');

// define the IP and port number
var localIP = "162.243.230.213"; // 127.0.0.1 is used when running the server locally
var port = 1337; // port to run webserver on

function sayHello(req, res) {
    
    console.log("We've got a request for " + req.url);
    
    // HTTP response header - the content will be HTML MIME type
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Write out the HTTP response body
    res.write('<html><body>' +
    '<h1>Hello Dynamic World Wide Web<h1>'+
    '</body></html>');
    
    // End of HTTP response
    res.end();
    
}

/************************/
/*  START THE SERVER    */
/************************/

// Create the HTTP server
var server = http.createServer(sayHello);

// Turn server on - now listening for requests on localIP and port
server.listen(port, localIP);

// print message to terminal that server is running
console.log('Server running at http://'+ localIP +':'+ port +'/');




// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');

// });

// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);

// });


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
