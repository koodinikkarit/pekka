
var actions = {};

var nextId = 1;

export default class {
	static gen(id) {
		if (actions[id]) return new Devive(id);
		return null;
	}

	static del(id) {
		if (actions[id]) {
			delete actions[id];
			return true;
		}
		return false;
	}

	contructor(id) {
		Object.defineProperty(this, "id", {
			get: () => id
		});
	}
}