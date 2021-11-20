const setColorModeVariables = () => {
	const currColorMode = localStorage.getItem('zeal-color-mode') || 'light';
	const colorModeVariables = JSON.parse(localStorage.getItem('zeal-color-mode-variables'));
	const currColorModeVariables = colorModeVariables[currColorMode];
	for (const prop in currColorModeVariables) {
		document.documentElement.style.setProperty(prop, currColorModeVariables[prop]);
	}
};

export default setColorModeVariables;
