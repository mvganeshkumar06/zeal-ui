const covertCamelToDashCase = (string) => {
	let result = [];
	for (let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			result.push(`-${string[i].toLowerCase()}`);
		} else {
			result.push(string[i]);
		}
	}
	return result.join('');
};

export default covertCamelToDashCase;
