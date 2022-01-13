import React, { useState, useEffect } from 'react';
import theme from '../theme/theme';
import generateCSSVariables from '../theme/generate-css-variables';
import ColorModeContext from './color-mode-context';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../style/GlobalStyle';
import LayoutContext from './layout-context';

const ZealProvider = ({
	customTheme,
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
		let currColorMode = currTheme.initialColorMode;
		const savedColorMode = localStorage.getItem('zeal-color-mode');
		if (savedColorMode) {
			currColorMode = savedColorMode;
		} else {
			const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (isDarkModePreferred) {
				currColorMode = 'dark';
			} else {
				currColorMode = 'light';
			}
		}
		setColorMode(currColorMode);
	}, []);

	useEffect(() => {
		if (colorMode) {
			document.documentElement.setAttribute('zeal-color-mode', colorMode);
			localStorage.setItem('zeal-color-mode', colorMode);
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
					colorModeVariables={colorModeVariables}
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
