import styled from 'styled-components';
import { getBackgroundColor, getOnColor } from '../../util/index';

const InlineCodeStyled = styled.code`
	${({ width, height, color }) => {
		return {
			fontFamily: 'monospace',
			fontSize: '1rem',
			width: width,
			height: height,
			padding: '0rem 0.25rem',
			margin: '0.25rem 0rem',
			borderRadius: '0.125rem',
			color: getOnColor(color),
			backgroundColor: getBackgroundColor(color),
		};
	}}
`;

export default InlineCodeStyled;
