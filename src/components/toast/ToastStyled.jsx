import styled from 'styled-components';
import { Container } from '../../index';
import { getBackgroundColor, getOnColor } from '../../util/index';

const getToastJustify = (position) => {
	if (position === 'top-left' || position === 'top' || position === 'top-right') {
		return 'flex-start';
	}
	if (position === 'bottom-left' || position === 'bottom' || position === 'botom-right') {
		return 'flex-end';
	}
	return 'flex-end';
};

const getToastAlign = (position) => {
	if (position === 'top-left' || position === 'bottom-left') {
		return 'flex-start';
	}
	if (position === 'top-right' || position === 'bottom-right') {
		return 'flex-end';
	}
	if (position === 'top' || position === 'bottom') {
		return 'center';
	}
	return 'center';
};

const getToastMargin = (position) => {
	if (position === 'top-left') {
		return '1rem 0rem 0rem 1rem';
	}
	if (position === 'top') {
		return '1rem 0rem 0rem 0rem';
	}
	if (position === 'top-right') {
		return '1rem 1rem 0rem 0rem';
	}
	if (position === 'bottom-left') {
		return '0rem 0rem 1rem 1rem';
	}
	if (position === 'bottom') {
		return '0rem 0rem 1rem 0rem';
	}
	if (position === 'bottom-right') {
		return '0rem 1rem 1rem 0rem';
	}
	return '0rem 0rem 1rem 0rem';
};

const ToastBackdropStyled = styled(Container)`
	${({ position }) => {
		return {
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: 'var(--zeal-z-index-backdrop)',
			justifyContent: getToastJustify(position),
			alignItems: getToastAlign(position),
		};
	}}
`;

const ToastContainerStyled = styled(Container)`
	${({ position, color }) => {
		return {
			borderRadius: '0.25rem',
			boxShadow: 'var(--zeal-shadow-dense)',
			zIndex: 'var(--zeal-z-index-overlay)',
			margin: getToastMargin(position),
			padding: '0.5rem',
			color: getOnColor(color),
			backgroundColor: getBackgroundColor(color),
			overflow: 'auto',
		};
	}}
`;

export { ToastBackdropStyled, ToastContainerStyled };
