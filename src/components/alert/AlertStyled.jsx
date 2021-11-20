import styled from 'styled-components';
import { getBackgroundColor, getOnColor } from '../../util/index';

const AlertStyled = styled.div`
	${({ width, height, type }) => {
		return {
			width: width,
			height: height,
			padding: '0.5rem',
			margin: '0.5rem 0rem',
			borderRadius: '0.25rem',
			color: getOnColor(type),
			backgroundColor: getBackgroundColor(type),
			display: 'flex',
			alignItems: 'center',
		};
	}}
`;

export default AlertStyled;
