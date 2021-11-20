const deepMerge = (...args) => {
	const target = {};
	const deepMergeHelper = (obj) => {
		for (const prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				if (Object.getPrototypeOf(obj[prop]) === Object.prototype) {
					target[prop] = deepMerge(target[prop], obj[prop]);
				} else {
					target[prop] = obj[prop];
				}
			}
		}
	};
	for (let i = 0; i < args.length; i++) {
		deepMergeHelper(args[i]);
	}
	return target;
};

export default deepMerge;
