import styled from 'styled-components';

const MainHeadingStyled = styled.h1`
	${({ width, height, size, center, bold }) => {
		return {
			width: width,
			height: height,
			textAlign: center ? 'center' : '',
			fontWeight: bold ? 'bold' : '',
			fontSize: size ? size : '',
		};
	}}
`;

const SubHeading1Styled = styled.h2`
	${({ width, height, size, center, bold }) => {
		return {
			width: width,
			height: height,
			textAlign: center ? 'center' : '',
			fontWeight: bold ? 'bold' : '',
			fontSize: size ? size : '',
		};
	}}
`;

const SubHeading2Styled = styled.h3`
	${({ width, height, size, center, bold }) => {
		return {
			width: width,
			height: height,
			textAlign: center ? 'center' : '',
			fontWeight: bold ? 'bold' : '',
			fontSize: size ? size : '',
		};
	}}
`;

const TextStyled = styled.p`
	${({ width, height, size, center, bold, scrollAuto }) => {
		return {
			width: width,
			height: height,
			textAlign: center ? 'center' : '',
			fontWeight: bold ? 'bold' : '',
			fontSize: size ? size : '',
			overflow: scrollAuto ? 'auto' : '',
		};
	}}
`;

export { MainHeadingStyled, SubHeading1Styled, SubHeading2Styled, TextStyled };
