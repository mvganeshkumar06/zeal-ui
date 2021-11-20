import styled from 'styled-components';
import { Container } from '../../index';

const LayoutStyled = styled(Container)`
	margin-top: 4rem;

	.headerDisabled {
		margin-top: 0rem;
	}

	.documentContainer {
		width: 100%;
		min-height: 100vh;
		margin: 0rem 1rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktopLarge}) {
		.documentContainer {
			width: calc(100% - 16rem);
			margin-right: 0rem;
		}

		.sidebarOpened {
			width: calc(100% - 34rem);
			margin-left: 0rem;
		}
	}
`;

export default LayoutStyled;
