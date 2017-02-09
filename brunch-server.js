var express	=	require('express');
var http		= require('http');
var Path		=	require('path');
// var fs	 = require('fs');

var server = {
	port: 8080,
	base: '/app',
	stripSlashes: true
};

// javascript example using default export and node http core module
module.exports = (port, path, callback) => {
  // your custom server code
  // callback doesn't take any parameters and (if provided) should be called after server is started
  // up to you to respect the `port` argument allowing users to change it from the CLI
  var app = express();
  server.port = process.env.PORT || 8080;

	const serve = (path, cache) => express.static(__dirname + path);

  app.use('/public', serve('/public'));
	app.use('/app', serve('./app'));


	app.get('/', function(req, res) {
		res.sendFile(Path.join(__dirname, '/public/index.html'));
	});

	app.listen(server, callback);

	return app;
};