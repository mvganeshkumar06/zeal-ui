import styled from 'styled-components';
import { Container } from '../../index';
import { getBackgroundColor, getOnColor } from '../../util/index';

const ModalBackdropStyled = styled(Container)`
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--zeal-color-backdrop);
	z-index: var(--zeal-z-index-backdrop);
`;

const ModalContainerStyled = styled(Container)`
	${({ position, color }) => {
		return {
			position: 'relative',
			overflow: 'auto',
			padding: '0.5rem',
			marginTop: `${position === 'center' ? 'auto' : '5rem'}`,
			marginBottom: `${position === 'center' ? 'auto' : ''}`,
			color: getOnColor(color, 'var(--zeal-color-on-background)'),
			backgroundColor: getBackgroundColor(color, 'var(--zeal-color-background-light)'),
			borderRadius: '0.25rem',
			boxShadow: 'var(--zeal-shadow-dense)',
			zIndex: 'var(--zeal-z-index-overlay)',
		};
	}}
`;

export { ModalBackdropStyled, ModalContainerStyled };
