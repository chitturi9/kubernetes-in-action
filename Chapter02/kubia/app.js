const http = require('http');
const os = require('os');

console.log("k8 server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("HELLOW WORLD SUMANTH_CHITTTURI " + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

