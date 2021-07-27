import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
	font-family:sans-serif;
	margin:0;
	padding:0;

	/* Scroll bar styles works on Firefox */
	scrollbar-width: thin;
	scrollbar-color: ${({ style: { colors }, theme }) => `${theme === "light" ? "rgba(56, 73, 87, 0.5)" : colors.gray[3]} transparent`};
}

/* Scroll bar styles works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
	width: 12px;
}

*::-webkit-scrollbar-track {
	background: transparent;
}

*::-webkit-scrollbar-thumb {
	background-color: ${({ style: { colors }, theme }) => theme === "light" ? "rgba(56, 73, 87, 0.5)" : colors.gray[3]};
	border-radius: 10px;
	border:${({ style: { colors }, theme }) => `3px solid ${theme === "light" ? "white" : colors.gray[5]}`};
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
