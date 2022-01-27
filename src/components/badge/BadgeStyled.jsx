import styled from 'styled-components';
import { getOnColor } from '../../util';

const BadgeStyled = styled.p`
	${({ width, height, color }) => {
		return {
			fontSize: '0.875rem',
			width: width,
			height: height,
			padding: '0rem 0.25rem',
			margin: '0.5rem 0rem',
			borderRadius: '0.125rem',
			color: getOnColor(color),
			backgroundColor: `var(--zeal-color-${color}-light,var(--zeal-color-primary-light))`,
		};
	}};
`;

export default BadgeStyled;
