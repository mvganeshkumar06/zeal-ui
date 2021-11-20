import styled from 'styled-components';
import { Container } from '../../index';

const DotsStyled = styled(Container)`
	.dotsContainer {
		position: relative;
		margin: 0.25rem;
	}

	.dotsContainer:hover {
		cursor: pointer;
	}

	.dots {
		width: 0.35rem;
		height: 0.35rem;
		border: 1px solid var(--zeal-color-on-background);
		border-radius: 50%;
		margin: 0.125rem;
	}

	.dotsActive {
		border: none;
		background-color: var(--zeal-color-on-background);
	}
`;

export default DotsStyled;
