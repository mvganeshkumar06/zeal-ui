import { convertCamelToDashCase } from './index';

const generateCSSVariablesHelper = (obj, currKey) => {
	let result = {};
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop) && prop !== 'color') {
			if (Object.getPrototypeOf(obj[prop]) === Object.prototype) {
				const currResult = generateCSSVariablesHelper(
					obj[prop],
					currKey + `-${convertCamelToDashCase(prop)}`,
				);
				result = { ...result, ...currResult };
			} else if (typeof obj[prop] === 'string' || typeof obj[prop] === 'number') {
				result[currKey + `-${convertCamelToDashCase(prop)}`] = obj[prop];
			}
		}
	}
	return result;
};

export default generateCSSVariablesHelper;
