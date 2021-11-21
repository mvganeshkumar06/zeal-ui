import styled from 'styled-components';
import { Container } from '../../index';

const SidebarStyled = styled(Container)`
	font-size: 0.85rem;
	width: 18rem;
	height: 88vh;
	position: sticky;
	top: 5rem;
	left: 0rem;
	margin: 1rem 0rem 1rem 1rem;
	padding: 0rem 0.5rem;
	background-color: var(--zeal-color-background-dark);
	border-radius: 0.125rem;
	box-shadow: var(--zeal-shadow-light);

	.sidebarLabel {
		padding: 0rem 0.5rem;
		border-radius: 0.25rem;
	}

	.sidebarLabel:hover {
		cursor: pointer;
		background-color: var(--zeal-color-highlight-base);
	}

	.sidebarText {
		padding: 0rem 0.5rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	.sidebarList {
		width: 100%;
	}

	.sidebarListItem {
		margin-left: 0.5rem;
	}

	.sidebarListItemActive {
		background-color: var(--zeal-color-highlight-base);
	}
`;

export default SidebarStyled;
