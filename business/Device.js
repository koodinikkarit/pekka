
import Action from "./Action";

var devices = {};

var nextId = 1;

export default class Device {
	static gen(id) {
		if (devices[id]) return new Device(id);
		return null;
	}

	static del(id) {
		if (devices[id]) {
			delete devices[id];
			return true;
		}
		return false;

	}

	static new({}) {
		var id = nextId++;
		var newItem = {
			mac: [],
			pressedActions: [],
			releasedActions: []
		};
		devices[id] = newItem;
		return new Device(id);
	}

	constructor(id) {
		Object.defineProperty(this, "id", {
			get: () => id
		});
	}

	set mac(mac) {
		var device = devices[this.id];
		if (device) device.mac = mac;
	}

	get mac() {
		var device = devices[this.id];
		if (device) return device.mac;
		return null;
	}

	get pressedActions() {
		var device = devices[this.id];
		if (device) {
			return device.pressedActions.map(id => Action.gen(id));
		}
		return null;
	}

	get releasedActions() {
		var device = devices[this.id];
		if (device) {
			return device.releasedActions.map(id => Action.gen(id));
		}
		return null;
	}

	addPressedAction(action) {
		var device = devices[this.id];
		if (device) {
			device.pressedActions.push(action.id);
		}
	}

	addReleasedAction(action) {
		var device = devices[this.id];
		if (device) {
			device.releasedActions.push(action.id);
		}
	}


	removePressedAction(id) {
		var device = devices[this.id];
		if (device) {
			device.pressedActions = device.pressedActions.filter(p => p !== id);
		}
	}

	removeReleasedAction(id) {
		var device = devices[this.id];
		if (device) {
			device.releasedActions = device.releasedActions.filter(p => p !== id);
		}
	}
}