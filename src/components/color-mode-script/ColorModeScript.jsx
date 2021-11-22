const ColorModeScript = ({ initialColorMode }) => {
	const script = `(function () {
		try {
			let currColorMode = '${initialColorMode ? initialColorMode : 'light'}';
			const savedColorMode = localStorage.getItem('zeal-color-mode');
			if (savedColorMode) {
				currColorMode = savedColorMode;
			} else {
				const isDarkModePreferred = window.matchMedia(
					'(prefers-color-scheme: dark)',
				).matches;
				if (isDarkModePreferred) {
					currColorMode = 'dark';
				} else {
					currColorMode = 'light';
				}
			}
			const colorModeVariables = JSON.parse(
				localStorage.getItem('zeal-color-mode-variables'),
			);
			if (colorModeVariables) {
				const currColorModeVariables = colorModeVariables[currColorMode];
				for (const prop in currColorModeVariables) {
					document.documentElement.style.setProperty(prop, currColorModeVariables[prop]);
				}
			}
			localStorage.setItem('zeal-color-mode', currColorMode);
		} catch (error) {
			console.log(error);
		}
	})()`;
	return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

export default ColorModeScript;
