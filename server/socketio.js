var io = require('socket.io').listen(3001);

connectedsockets = []

function SocketIoBackend(startupTime, config, events) {
	events.on('flush', this.flush);

	io.sockets.on('connection', function (socket) {
		connectedsockets.push(socket);
 		console.log('socket is connected!')
	});
}

SocketIoBackend.prototype.flush = function(timestamp, metrics) { 
	connectedsockets.forEach( function(socket) {
		socket.emit('timers', metrics);
	});
	console.log('flushing - metrics:'+JSON.stringify(metrics));
}

exports.init = function(startupTime, config, events) {
  	var instance = new SocketIoBackend(startupTime, config, events);
  	return true;
};




