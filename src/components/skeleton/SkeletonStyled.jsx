import styled from 'styled-components';

const BoxSkeletonStyled = styled.div`
	${({ width, height }) => {
		return {
			width: width,
			height: height,
			backgroundColor: 'var(--zeal-color-highlight-base)',
		};
	}};
	margin-bottom: 0.5rem;
	border-radius: 0.25rem;
`;

const RoundSkeletonStyled = styled(BoxSkeletonStyled)`
	border-radius: 50%;
`;

export { BoxSkeletonStyled, RoundSkeletonStyled };
