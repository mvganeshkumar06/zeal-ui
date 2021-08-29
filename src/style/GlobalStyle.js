import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
	font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin:0;
	padding:0;
}

html{
	/* Scroll bar styles works on Firefox */
	scrollbar-width: thin;
	scrollbar-color: ${({ baseStyle: { colors }, theme }) => theme === "light" ? `rgb(191,191,191) ${colors.gray[2]}` : `${colors.gray[3]} ${colors.gray[4]}`};
}

/* Scroll bar styles works on Chrome, Edge, and Safari */
html::-webkit-scrollbar {
	width: 0.75rem;
}

html::-webkit-scrollbar-thumb {
	background-color: ${({ baseStyle: { colors }, theme }) => theme === "light" ? "rgb(191,191,191)" : colors.gray[3]};
}

html::-webkit-scrollbar-track {
	background: ${({ baseStyle: { colors }, theme }) => theme === "light" ? colors.gray[2] : colors.gray[4]};
}

/* Default focus */
:focus {
	outline: auto;
}

/* Base styles for light and dark mode */
:root{
	${({ baseStyle: { colors }, theme }) => {
		return {
			backgroundColor: theme === "light" ? "white" : colors.gray[5],
			color: theme === "light" ? "black" : "white",
			transition: "background-color 0.5s ease",
		};
	}}
}

h1{
	margin: 0.67em 0em;
}

h2{
	margin: 0.83em 0em;
}

h3{
	margin: 1em 0em;
}

h4{
	margin: 1.33em 0em;
}

h5{
	margin: 1.67em 0em;
}

h6{
	margin: 2.33em 0em;
}

p{
	margin:1em 0em;
}

a {
	text-decoration: none;
	color: ${({ theme }) => `${theme === "light" ? "black" : "white"}`};
}

a:hover {
	cursor: pointer;
}

${({ customGlobalStyles }) => customGlobalStyles}

`;

export default GlobalStyle;
