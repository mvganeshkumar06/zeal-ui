import styled from 'styled-components';
import { Drawer } from '../../index';

const SidebarMobileStyled = styled(Drawer)`
	display: flex;
	font-size: 0.85rem;
	padding-right: 1rem;

	.sidebarMobileHeader {
		position: relative;
	}

	.sidebarMobileLogo {
		margin-right: 0.5rem;
		object-fit: cover;
	}

	.sidebarMobileTitle {
		margin-left: 0.5rem;
	}

	.sidebarMobileCloseArrow {
		position: absolute;
		right: 0rem;
	}

	.sidebarMobileDivider {
		margin-bottom: 1rem;
	}

	.sidebarMobileTabContainer {
		margin: 0.5rem 0rem;
		padding-right: 0.5rem;
	}

	.sidebarMobileBtn {
		margin-left: 0.25rem;
		margin-right: 0.5rem;
	}

	.sidebarMobileBtnActive {
		border: 2px solid var(--zeal-color-on-background);
	}

	.sidebarMobileText {
		padding: 0rem 0.25rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	.sidebarMobileList {
		width: 100%;
	}

	.sidebarMobileListItem {
		margin-left: 0.25rem;
	}
`;

export default SidebarMobileStyled;
