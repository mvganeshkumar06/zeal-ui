import styled from 'styled-components';
import { Container } from '../../index';
import { getBackgroundColor, getOnColor } from '../../util';

const SlideshowStyled = styled(Container)`
	color: ${({ color }) => getOnColor(color, 'var(--zeal-color-on-background)')};
	background-color: ${({ color }) =>
		getBackgroundColor(color, 'var(--zeal-color-highlight-base)')};
	position: relative;
	border-radius: 0.25rem;
	margin: 2rem 0rem;

	.slideContainer {
		width: 100%;
		color: var(--zeal-color-black);
	}

	.prevArrow,
	.nextArrow {
		position: absolute;
		top: auto;
		bottom: auto;
		z-index: var(--zeal-z-index-float);
		border-color: var(--zeal-color-black);
	}

	.prevArrow {
		left: 0.5rem;
	}

	.nextArrow {
		right: 0.5rem;
	}
`;

export default SlideshowStyled;
