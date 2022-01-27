import styled from 'styled-components';
import { Container } from '../../index';

const FooterStyled = styled(Container)`
	margin-top: auto;
	padding: 1rem;
	background-color: var(--zeal-color-background-base-main);
	box-shadow: var(--zeal-shadow-medium);

	.footerLinkContainer {
		margin-bottom: 2rem;
	}

	.footerLinkItem {
		width: auto;
		margin: 0.25rem 0rem;
		text-align: center;
	}

	.footerLink:hover {
		background-color: var(--zeal-color-highlight-base);
	}

	.footerLogo {
		margin: 0.25rem 0rem;
		object-fit: cover;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletPotrait}) {
		.footerLinkContainer {
			flex-direction: row;
			justify-content: space-evenly;
		}
	}
`;

export default FooterStyled;
