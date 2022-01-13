import styled from 'styled-components';

const getBadgeColor = (color) => {
	if (
		color === 'primary' ||
		color === 'secondary' ||
		color === 'accent' ||
		color === 'error' ||
		color === 'warning' ||
		color === 'success'
	) {
		return `var(--zeal-color-${color}-dark)`;
	}
	return `var(--zeal-color-primary-dark)`;
};

const getBadgeBackgroundColor = (color) => {
	if (
		color === 'primary' ||
		color === 'secondary' ||
		color === 'accent' ||
		color === 'error' ||
		color === 'warning' ||
		color === 'success'
	) {
		return `var(--zeal-color-${color}-light)`;
	}
	return `var(--zeal-color-primary-light)`;
};

const BadgeStyled = styled.p`
	${({ width, height, color }) => {
		return {
			width: width,
			height: height,
			padding: '0.5rem',
			margin: '0.5rem 0rem',
			borderRadius: '0.25rem',
			fontSize: '0.75rem',
			fontWeight: 'bold',
			textTransform: 'uppercase',
			color: getBadgeColor(color),
			backgroundColor: getBadgeBackgroundColor(color),
		};
	}};
`;

export default BadgeStyled;
