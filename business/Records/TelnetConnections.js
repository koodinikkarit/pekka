var telnet = require('another-telnet-client');
var connections = {};

export const constcreateConnection = (id, ip, port) => {
	return new Promise((resolve, reject) => {
		if (id && ip && port) {
			var connection = connections[id];
			if (connection) resolve(connection);
			else {
				connection = new telnet();
                var params = {
					host: ip,
					port: port,
					shellPrompt: '/ # ',
					timeout: 1500
				};
				connections[id] = connection;
				resolve(connection);
				setTimeout(() => {
					delete connection[id];

				}, 1500);
				connection.connect(params);
			}
		}
	});
}