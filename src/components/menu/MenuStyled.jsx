import styled from 'styled-components';
import { Container } from '../../index';
import { getBackgroundColor, getOnColor } from '../../util/index';

const MenuContainerStyled = styled.div`
	position: relative;
`;

const MenuStyled = styled(Container)`
	${({ color, top, right, bottom, left }) => {
		return {
			padding: '0rem 0.5rem',
			borderRadius: '0.25rem',
			position: 'absolute',
			zIndex: 'var(--zeal-z-index-banner)',
			color: getOnColor(color, 'var(--zeal-color-on-background)'),
			backgroundColor: getBackgroundColor(color, 'var(--zeal-color-background-light)'),
			top: top,
			right: right,
			bottom: bottom,
			left: left,
			boxShadow: 'var(--zeal-shadow-medium)',
		};
	}}
`;

export { MenuContainerStyled, MenuStyled };
