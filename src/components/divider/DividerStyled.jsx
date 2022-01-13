import styled from 'styled-components';
import { getBackgroundColor } from '../../util/index';

const DividerStyled = styled.span`
	${({ width, height, color }) => {
		return {
			display: 'block',
			width: width ? width : '100%',
			margin: '0.5rem 0rem',
			borderBottom: `${height ? height : '1px'} solid ${getBackgroundColor(
				color,
				'var(--zeal-color-border)',
			)}`,
		};
	}}
`;

export default DividerStyled;
