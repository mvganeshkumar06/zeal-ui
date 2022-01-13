import styled from 'styled-components';
import { Container } from '../../index';
import { getBackgroundColor, getOnColor } from '../../util/index';

const ToastContainerStyled = styled(Container)`
	${({ top, right, bottom, left, color }) => {
		return {
			position: 'fixed',
			top: top,
			right: right,
			bottom: bottom,
			left: left,
			borderRadius: '0.25rem',
			boxShadow: 'var(--zeal-shadow-dense)',
			zIndex: 'var(--zeal-z-index-overlay)',
			padding: '0.5rem',
			color: getOnColor(color),
			backgroundColor: getBackgroundColor(color),
			overflow: 'auto',
		};
	}}
`;

export default ToastContainerStyled;
