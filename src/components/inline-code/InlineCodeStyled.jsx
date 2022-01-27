import styled from 'styled-components';

const InlineCodeStyled = styled.code`
	${({ width, height, color, colorMode }) => {
		return {
			fontFamily: 'monospace',
			fontSize: '0.875rem',
			width: width,
			height: height,
			padding: '0rem 0.25rem',
			margin: '0.25rem 0rem',
			borderRadius: '0.125rem',
			color:
				colorMode === 'light'
					? `var(--zeal-color-${color}-dark,var(--zeal-color-primary-dark))`
					: `var(--zeal-color-${color}-light,var(--zeal-color-primary-light))`,
			backgroundColor: `var(--zeal-color-background-${color},var(--zeal-color-background-primary))`,
		};
	}}
`;

export default InlineCodeStyled;
