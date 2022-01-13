import styled from 'styled-components';
import { getOnColor } from '../../util/index';

const getAlertBackgroundColor = (color) => {
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

const getAlertBorderColor = (color) => {
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

const AlertStyled = styled.div`
	${({ width, height, type }) => {
		return {
			width: width,
			height: height,
			padding: '0.5rem',
			margin: '0.5rem 0rem',
			borderRadius: '0.25rem',
			color: getOnColor(type),
			backgroundColor: getAlertBackgroundColor(type),
			borderLeft: `0.3rem solid ${getAlertBorderColor(type)}`,
		};
	}}
`;

export default AlertStyled;
