import { generateCSSVariablesHelper } from '../util';

const generateCSSVariables = (theme) => {
	const themeVariables = generateCSSVariablesHelper(theme, '--zeal');
	const colorMode = theme.color;
	let colorModeVariables = {};
	for (const prop in colorMode) {
		if (colorMode.hasOwnProperty(prop)) {
			const currColorModeVariables = generateCSSVariablesHelper(
				colorMode[prop],
				'--zeal-color',
			);
			const currColorMode = {};
			currColorMode[`${prop}`] = currColorModeVariables;
			colorModeVariables = { ...colorModeVariables, ...currColorMode };
		}
	}
	return { themeVariables, colorModeVariables };
};

export default generateCSSVariables;
