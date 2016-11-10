'use strict';

var Gun = require('gun');
var http = require('http');
var port = process.env.PORT || 8080;
var fs = require('fs');

// Saves all data to `data.json`.
var gun = Gun({
	file: 'data.json',
});

// Listens on /gun.js route.
var server = http.Server(gun.wsp.server);

// Serves up /index.html
server.on('request', function (req, res) {
	if (req.url === '/' || req.url === '/index.html') {
		fs.createReadStream('index.html').pipe(res);
	}
});

// Handles real-time requests and updates.
gun.wsp(server);

server.listen(port, function () {
	console.log('\nApp listening on port', port);
});
