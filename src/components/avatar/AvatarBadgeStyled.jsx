import styled from 'styled-components';
import { getBackgroundColor } from '../../util';

const AvatarBadgeStyled = styled.span`
	${({ width, height, bottom, right, color }) => {
		return {
			width: width,
			height: height,
			position: 'absolute',
			bottom: bottom ? bottom : '5%',
			right: right ? right : '5%',
			border: '0.125rem solid transparent',
			borderRadius: '50%',
			backgroundColor: getBackgroundColor(color),
		};
	}}
`;

export default AvatarBadgeStyled;
