import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}

:root{
	--zeal-color-black: hsl(0, 0%, 0%);
	--zeal-color-white: hsl(0, 0%, 100%);
	${({ themeVariables }) => themeVariables};
	transition: color 1s ease-in-out, background-color 1s ease-in-out;
	scroll-padding-top: 4.5rem;
}

body{
	color: var(--zeal-color-on-background);
	background-color: var(--zeal-color-background-xdark);
	font-family:var(--zeal-font-family);
	scrollbar-color: var(--zeal-color-scrollbar-thumb) var(--zeal-color-scrollbar-track);
}

::-webkit-scrollbar {
	width: 0.75rem;
}

::-webkit-scrollbar-thumb {
	background-color: var(--zeal-color-scrollbar-thumb);
	border-radius: 0.125rem;
}

::-webkit-scrollbar-track {
	background-color: var(--zeal-color-scrollbar-track);
}

:focus {
	outline: auto;
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
	color: var(--zeal-color-on-background);
}

${({ customGlobalStyles }) => customGlobalStyles}

`;

export default GlobalStyle;
