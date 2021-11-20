import styled from 'styled-components';
import { Drawer } from '../../index';
import { getHighlightColor } from '../../util/index';

const SidebarMobileStyled = styled(Drawer)`
	font-size: 0.85rem;
	padding-right: 1rem;

	.sidebarMobileHeader {
		margin-top: 0.5rem;
	}

	.sidebarMobileLogo {
		margin: 0rem 0.5rem;
		object-fit: cover;
	}

	.sidebarMobileTitle {
		margin: 0rem 0.5rem;
	}

	.sidebarMobileBtn {
		margin: 1rem 0.5rem;
	}

	.sidebarMobileBtnActive {
		background-color: ${({ color }) => getHighlightColor(color)};
	}

	.sidebarMobileLabel {
		padding: 0rem 0.5rem;
		margin: 0rem;
		border-radius: 0.25rem;
	}

	.sidebarMobileText {
		padding: 0rem 0.5rem;
		margin: 0rem;
		font-weight: bold;
	}

	.sidebarMobileList {
		width: 100%;
		height: auto;
	}

	.sidebarMobileListItem {
		width: 100%;
		margin-left: 0.5rem;
	}

	.sidebarMobileListItemActive {
		background-color: var(--zeal-color-highlight-base);
	}
`;

export default SidebarMobileStyled;
