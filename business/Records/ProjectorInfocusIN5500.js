import Immutable from "immutable";

import {
	createConnection
} from "./TelnetConnections";

export default class extends Immutable.Record({
	id: null,
	ip: "",
	port: 23
}) {

	turnOnProjector() {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.exec("(PWR1)", function(response) {
    			resolve(response);
  			});
		});
	}

	turnOffProjector() {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.exec("(PWR0)", function(response) {
    			resolve(response);
  			});
		});
	}

	setBlankOn() {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.exec("(BLK1)", function(response) {
			resolve(response);
			});
		});
	}

	setBlankOff() {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.exec("(BLK0)", function(response) {
				resolve(response);
			});
		});
	}

	setCustomKey(key) {
		createConnection(this.id, this.ip, this.port).then(connection => {
			connection.exec(`(EFK${key})`, function(response) {
				resolve(response);
			});
		});
	}
  					
}


