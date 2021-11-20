import styled from 'styled-components';
import { Container } from '../../index';

const OverviewStyled = styled(Container)`
	display: flex;
	font-size: 0.85rem;
	width: 16rem;
	max-height: 70vh;
	position: sticky;
	top: 5rem;
	right: 0rem;
	margin: 1rem;
	padding: 0rem 0.5rem;
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
`;

export default OverviewStyled;