import styled from 'styled-components';
import { Container } from '../../index';
import { getBackgroundColor, getOnColor } from '../../util/index';

const DrawerBackdropStyled = styled(Container)`
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--zeal-color-backdrop);
	z-index: var(--zeal-z-index-backdrop);
`;

const DrawerContainerStyled = styled(Container)`
	${({ position, color }) => {
		return {
			padding: '0.5rem',
			color: getOnColor(color, 'var(--zeal-color-on-background)'),
			backgroundColor: getBackgroundColor(color, 'var(--zeal-color-background-light)'),
			boxShadow: 'var(--zeal-shadow-medium)',
			zIndex: 'var(--zeal-z-index-overlay)',
			position: 'fixed',
			top: `${position === 'top' ? '0rem' : 'auto'}`,
			bottom: `${position === 'bottom' ? '0rem' : 'auto'}`,
			left: `${position === 'right' ? 'auto' : '0rem'}`,
			right: `${position === 'left' ? 'auto' : '0rem'}`,
			overflow: 'auto',
		};
	}}
`;

export { DrawerBackdropStyled, DrawerContainerStyled };
