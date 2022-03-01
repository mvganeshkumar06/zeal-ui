import styled from 'styled-components';
import { Container } from '../../index';

const LayoutStyled = styled(Container)`
	margin-top: 4rem;

	.headerDisabled {
		margin-top: 0rem;
	}

	.documentContainer {
		min-height: 100vh;
		padding: 1rem;
		box-shadow: var(--zeal-shadow-light);
	}

	.sidebarOrOverviewEnabled {
		background-color: var(--zeal-color-background-base-dark);
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		.sidebarOrOverviewEnabled {
			margin: 1rem;
		}
	}
`;

export default LayoutStyled;
