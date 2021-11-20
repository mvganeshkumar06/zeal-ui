import styled from 'styled-components';
import { getBackgroundColor, getOnColor } from '../../util/index';

const BadgeStyled = styled.p`
	${({ width, height, color }) => {
		return {
			width: width,
			height: height,
			padding: '0.5rem',
			margin: '0.5rem 0rem',
			display: 'flex',
			alignItems: 'center',
			fontSize: '0.75rem',
			fontWeight: 'bold',
			textTransform: 'uppercase',
			borderRadius: '0.25rem',
			color: getOnColor(color),
			backgroundColor: getBackgroundColor(color),
		};
	}};
`;

export default BadgeStyled;
