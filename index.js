var http = require('http');

const PORT = 80;

function requestHandler(req, req){
	res.end('Hello ${process.platform}');
}

var server = http.createServer(requestHnadler);

server.listen(PORT, function(){
	console.log('${process.env.NODE_ENV} server listening on port: ${PORT}. CTRL-C to exit.');
});