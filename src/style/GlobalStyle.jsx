import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

:root{
	--zeal-color-black: hsl(0, 0%, 0%);
	--zeal-color-white: hsl(0, 0%, 90%);
	${({ themeVariables }) => themeVariables};
	transition: background-color 0.5s ease 0s;
	scroll-padding-top: 4.5rem;
	line-height: 1.5;
}

:root[zeal-color-mode="light"]{
	${({ colorModeVariables }) => colorModeVariables.light};
}

:root[zeal-color-mode="dark"]{
	${({ colorModeVariables }) => colorModeVariables.dark};
}

body{
	color: var(--zeal-color-on-background);
	background-color: var(--zeal-color-background-base-xdark);
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

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 1rem 0rem;
}

p {
	margin: 0.75rem 0rem;
}

blockquote {
	opacity: 0.75;
	border-left: 0.25rem solid var(--zeal-color-border-base);
	padding-left: 0.75rem;
	margin: 0.75rem 0rem;
}

li {
	margin: 0.75rem 0rem 0.75rem 1rem;
}

code {
	font-size: 0.875rem;
	color: var(--zeal-color-on-background);
	background-color: var(--zeal-color-highlight-base);
	padding: 0rem 0.25rem;
	margin: 0.25rem 0rem;
	border-radius: 0.125rem;
}

pre code{
  background-color: transparent;
}

hr {
	width: 100%;
	margin: 0.75rem 0rem;
	border: none;
	border-bottom: 1px solid var(--zeal-color-border-base);
}

a {
	color: var(--zeal-color-on-background);
}

`;

export default GlobalStyle;
