import React, { useState, useEffect } from 'react';
import theme from '../theme/theme';
import generateCSSVariables from '../theme/generate-css-variables';
import ColorModeContext from './color-mode-context';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../style/GlobalStyle';
import LayoutContext from './layout-context';

const ZealProvider = ({
	customTheme,
	customGlobalStyles,
	headerContents,
	sidebarContents,
	footerContents,
	enableSidebar,
	enableOverview,
	disableHeader,
	disableFooter,
	children,
}) => {
	let currTheme = theme;
	if (customTheme) {
		currTheme = customTheme;
	}
	const { themeVariables, colorModeVariables } = generateCSSVariables(currTheme);

	const [colorMode, setColorMode] = useState();

	useEffect(() => {
		localStorage.setItem('zeal-color-mode-variables', JSON.stringify(colorModeVariables));
		const savedColorMode = localStorage.getItem('zeal-color-mode');
		if (savedColorMode) {
			setColorMode(savedColorMode);
		}
	}, []);

	useEffect(() => {
		if (colorMode) {
			localStorage.setItem('zeal-color-mode', colorMode);
			const currColorModeVariables = colorModeVariables[colorMode];
			for (const prop in currColorModeVariables) {
				document.documentElement.style.setProperty(prop, currColorModeVariables[prop]);
			}
		}
	}, [colorMode]);

	const toggleColorMode = () => {
		if (colorMode === 'light') {
			setColorMode('dark');
		} else if (colorMode === 'dark') {
			setColorMode('light');
		}
	};

	return (
		<ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
			<ThemeProvider theme={currTheme}>
				<GlobalStyle
					themeVariables={themeVariables}
					customGlobalStyles={customGlobalStyles}
				/>
				<LayoutContext.Provider
					value={{
						headerContents,
						sidebarContents,
						footerContents,
						enableSidebar,
						enableOverview,
						disableHeader,
						disableFooter,
					}}
				>
					{children}
				</LayoutContext.Provider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default ZealProvider;
