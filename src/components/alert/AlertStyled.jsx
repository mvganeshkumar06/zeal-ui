import styled from 'styled-components';

const AlertStyled = styled.div`
	${({ width, height, type, colorMode }) => {
		return {
			fontSize: '0.875rem',
			width: width,
			height: height,
			padding: '0.5rem',
			margin: '0.5rem 0rem',
			borderRadius: '0.25rem',
			color:
				colorMode === 'light'
					? `var(--zeal-color-${type}-dark,var(--zeal-color-primary-dark))`
					: `var(--zeal-color-${type}-light,var(--zeal-color-primary-light))`,
			backgroundColor: `var(--zeal-color-background-${type},var(--zeal-color-background-primary))`,
			borderLeft: `0.3rem solid var(--zeal-color-border-${type},var(--zeal-color-border-primary))`,
		};
	}}
`;

export default AlertStyled;
