import styled from 'styled-components';
import { getBackgroundColor, getHighlightColor, getOnColor } from '../../util';

const ButtonStyled = styled.button`
	${({ width, height, color, floating, top, right, bottom, left }) => {
		return {
			width: width,
			height: height,
			padding: '0.5rem',
			margin: '0.5rem 0rem',
			border: '1px solid transparent',
			borderRadius: '0.25rem',
			color: getOnColor(color),
			backgroundColor: getBackgroundColor(color),
			position: floating ? 'fixed' : '',
			boxShadow: floating ? 'var(--zeal-shadow-light)' : '',
			top: top ? top : '',
			right: right ? right : '',
			bottom: bottom ? bottom : '',
			left: left ? left : '',
		};
	}};

	&:hover {
		cursor: pointer;
		background-color: ${({ color }) => getHighlightColor(color)};
	}
`;

export default ButtonStyled;
