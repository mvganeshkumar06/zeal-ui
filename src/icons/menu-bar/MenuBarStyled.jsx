import styled from 'styled-components';
import { Container } from '../../index';

const MenuBarStyled = styled(Container)`
	.menu:hover {
		cursor: pointer;
	}

	.bar {
		width: 1.5rem;
		height: 0.25rem;
		border: 1px solid var(--zeal-color-on-background);
		margin: 0.125rem 0rem;
	}

	.menuOpen {
		border: none;
		background-color: var(--zeal-color-on-background);
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		display: none;
	}
`;

export default MenuBarStyled;
