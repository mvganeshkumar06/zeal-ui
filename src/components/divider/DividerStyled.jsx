import styled from 'styled-components';
import { getBackgroundColor } from '../../util';

const DividerStyled = styled.hr`
	${({ width, height, color }) => {
		return {
			width: width ? width : '100%',
			margin: '0.75rem 0rem',
			border: 'none',
			borderBottom: `${height ? height : '1px'} solid ${getBackgroundColor(
				color,
				'var(--zeal-color-border-base)',
			)}`,
		};
	}}
`;

export default DividerStyled;
