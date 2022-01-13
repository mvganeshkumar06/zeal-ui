import styled from 'styled-components';
import { Container } from '../../index';

const OverviewStyled = styled(Container)`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		display: flex;
		font-size: 0.85rem;
		min-width: 14rem;
		max-width: 14rem;
		max-height: 50vh;
		position: sticky;
		top: 5rem;
		right: 0rem;
		margin: 1rem 1rem 1rem 0rem;
		padding: 0rem 0.5rem 0.5rem 0.5rem;
		background-color: var(--zeal-color-background-dark);
		border-radius: 0.125rem;
		box-shadow: var(--zeal-shadow-light);

		.overviewList {
			width: 100%;
		}

		.overviewTitle,
		.subHeading2 {
			margin-left: 0.5rem;
		}

		.overviewListItemActive {
			background-color: var(--zeal-color-highlight-base);
		}
	}
`;

export default OverviewStyled;
