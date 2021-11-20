import styled from 'styled-components';

const AvatarContainerStyled = styled.div`
	width: fit-content;
	position: relative;
`;

const AvatarStyled = styled.img`
	${({ width, height }) => {
		return {
			width: width,
			height: height,
			borderRadius: '50%',
			minWidth: width,
			minHeight: height,
			color: 'var(--zeal-color-on-background)',
			backgroundColor: 'var(--zeal-color-highlight-base)',
		};
	}};
`;

export { AvatarContainerStyled, AvatarStyled };
