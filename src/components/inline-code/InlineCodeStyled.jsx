import styled from 'styled-components';
import { getOnColor } from '../../util/index';

const getInlineCodeBackgroundColor = (color) => {
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
	return 'var(--zeal-color-primary-light)';
};

const InlineCodeStyled = styled.code`
	${({ width, height, color }) => {
		return {
			fontFamily: 'monospace',
			fontSize: '0.9rem',
			width: width,
			height: height,
			padding: '0rem 0.25rem',
			margin: '0.25rem 0rem',
			borderRadius: '0.125rem',
			color: getOnColor(color),
			backgroundColor: getInlineCodeBackgroundColor(color),
		};
	}}
`;

export default InlineCodeStyled;
