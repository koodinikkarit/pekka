
import Immutable from "immutable";
const net = require('net');

import {
	SET_KWM_CONNECTION,
	SET_VIDEO_CONNECTION,
	REQUEST_ALL_STATES,
	TURN_OFF_CON_PORT,
	TURN_OFF_CPU_PORT
} from "./MatrixCommands";


var connections = {};

export default class extends Immutable.Record({
	id: null,
	ip: "",
	port: ""
}) {
	constructor(props) {
		super(props);
		console.log("prosp", props);
	}

	setVideoConnection(con, cpu) {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.write(new Buffer([2, SET_VIDEO_CONNECTION, 128+con, 128+cpu, 3]));
		});
	}

	turnOffVideoConnection(con) {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.write(new Buffer([2, TURN_OFF_CON_PORT, 3]));
		});
	}

	setFullVideoConnections(connections) {
		createConnection(this.id, this.ip, this.port).then(connection => {
			
		});
	}

	turnOffAllVideoConnections() {
		createConnection(this.id, this.ip, this.port).then(connection => {

		});
	}

	setKwmConnection(con, cpu) {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.write(new Buffer([2, SET_KWM_CONNECTION, 128+cpu, 128+con, 3]));
		});
	}

	turnOffKwmConnection(cpu) {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.write(new Buffer([2, TURN_OFF_CPU_PORT, 3]));
		});
	}

	setFullKwmConnections(connections) {

	}

	turnOffAllKwmConnections() {

	}

	requestAllStates() {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.write(new Buffer([2, REQUEST_ALL_STATES, 3]));
		});
	}
}

function createConnection(id, ip, port) {
	return new Promise((resolve, reject) => {
		if (id && ip && port) {
			var client = connections[id];
			if (client) resolve(client);
			else {
				client = new net.Socket();
				client.connect(port, ip, () => {
					connections[id] = client
					setTimeout(() => {
						delete connections[id];
					}, 60000)
					resolve(client);
				});
			}
		}
	});
}