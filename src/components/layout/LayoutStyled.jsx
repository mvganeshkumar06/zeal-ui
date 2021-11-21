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
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		.documentContainer {
			margin: 0rem 1rem;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktopLarge}) {
		.sidebarActive {
			width: calc(100% - 18rem);
		}

		.overviewActive {
			width: calc(100% - 16rem);
		}

		.sidebarAndOverviewActive {
			width: calc(100% - 34rem);
		}
	}
`;

export default LayoutStyled;
