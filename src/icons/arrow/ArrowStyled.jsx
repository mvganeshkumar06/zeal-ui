import styled from 'styled-components';

const ArrowContainerStyled = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.25rem;
	margin: 0.25rem;
	border: ${({ withBorder }) => (withBorder ? `1px solid var(--zeal-color-on-background)` : '')};
	border-radius: 0.25rem;
	&:hover {
		background-color: var(--zeal-color-highlight-base);
	}
`;

const TopArrowStyled = styled.span`
	border-left: 0.5rem solid transparent;
	border-right: 0.5rem solid transparent;
	border-bottom: ${({ color }) =>
		`0.5rem solid var(--zeal-color-${color}-main,var(--zeal-color-on-background))`};
`;

const BottomArrowStyled = styled.span`
	border-left: 0.5rem solid transparent;
	border-right: 0.5rem solid transparent;
	border-top: ${({ color }) =>
		`0.5rem solid var(--zeal-color-${color}-main,var(--zeal-color-on-background))`};
`;

const LeftArrowStyled = styled.span`
	border-top: 0.5rem solid transparent;
	border-bottom: 0.5rem solid transparent;
	border-right: ${({ color }) =>
		`0.5rem solid var(--zeal-color-${color}-main,var(--zeal-color-on-background))`};
`;

const RightArrowStyled = styled.span`
	border-top: 0.5rem solid transparent;
	border-bottom: 0.5rem solid transparent;
	border-left: ${({ color }) =>
		`0.5rem solid var(--zeal-color-${color}-main,var(--zeal-color-on-background))`};
`;

export {
	ArrowContainerStyled,
	TopArrowStyled,
	BottomArrowStyled,
	RightArrowStyled,
	LeftArrowStyled,
};
