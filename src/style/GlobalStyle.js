import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
	font-family:sans-serif;
	margin:0;
	padding:0;
	line-height: 1.5rem;

	/* Scroll bar styles works on Firefox */
	scrollbar-width: auto;
	scrollbar-color: ${({ style: { colors }, theme }) => `${theme === "light" ? "rgba(56, 73, 87, 0.5)" : colors.gray[3]} transparent`};
}

/* Scroll bar styles works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
	width: 6px;
}

*::-webkit-scrollbar-track {
	background: transparent;
}

*::-webkit-scrollbar-thumb {
	background-color: ${({ style: { colors }, theme }) => theme === "light" ? "rgba(56, 73, 87, 0.5)" : colors.gray[3]};
	border-radius: 2px;
}

/* Default focus */
:focus {
	outline: auto;
}

/* Base styles for light and dark mode */
:root{
	${({ style: { colors }, theme }) => {
		return {
			backgroundColor: theme === "light" ? "white" : colors.gray[5],
			color: theme === "light" ? "black" : "white",
			transition: "background-color 0.5s ease",
		};
	}}
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
