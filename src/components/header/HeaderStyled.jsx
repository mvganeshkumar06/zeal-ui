import styled from 'styled-components';
import { Container } from '../../index';

const HeaderStyled = styled(Container)`
	position: fixed;
	top: 0rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	background-color: var(--zeal-color-background-base-main);
	box-shadow: var(--zeal-shadow-medium);
	z-index: var(--zeal-z-index-banner);

	.headerLogo {
		margin: 0rem 0.5rem 0rem 0.75rem;
		object-fit: cover;
	}

	.headerTitle {
		margin: 0rem 0.5rem;
	}

	.headerLinkContainer {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.headerLinkItem {
		margin: 0rem 0.5rem;
	}

	.colorModeSwitch {
		margin-top: 0.5rem;
	}
`;

export default HeaderStyled;
