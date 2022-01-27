import styled from 'styled-components';
import { getBackgroundColor } from '../../util';

const SpinnerStyled = styled.div`
	display: inline-block;
	border-radius: 50%;
	animation: spin 1s linear infinite;
	${({ width, height, color }) => {
		return {
			width: width ? width : '3rem',
			height: height ? height : '3rem',
			marginTop: '0.5rem',
			border: `0.25rem solid var(--zeal-color-highlight-base)`,
			borderTopColor: getBackgroundColor(color),
		};
	}}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`;

export default SpinnerStyled;
