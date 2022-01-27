import styled from 'styled-components';
import { Container } from '../../index';

const SidebarStyled = styled(Container)`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		display: flex;
		font-size: 0.85rem;
		min-width: 18rem;
		max-width: 18rem;
		height: 87vh;
		position: sticky;
		top: 5rem;
		left: 0rem;
		margin: 1rem 0rem 1rem 1rem;
		padding: 0rem 0.5rem 0.5rem 0.5rem;
		background-color: var(--zeal-color-background-base-dark);
		border-radius: 0.125rem;
		box-shadow: var(--zeal-shadow-light);

		.sidebarText {
			padding: 0rem 0.25rem;
			font-weight: bold;
			text-transform: uppercase;
		}

		.sidebarList {
			width: 100%;
		}

		.sidebarListItem {
			margin-left: 0.25rem;
		}
	}
`;

export default SidebarStyled;
