import styled from 'styled-components';
import { getBackgroundColor } from '../../util/index';

const AvatarBadgeStyled = styled.span`
	${({ width, height, color }) => {
		return {
			width: width,
			height: height,
			position: 'absolute',
			bottom: '5%',
			right: '3%',
			border: '0.125rem solid transparent',
			borderRadius: '50%',
			backgroundColor: getBackgroundColor(color),
		};
	}}
`;

export default AvatarBadgeStyled;
