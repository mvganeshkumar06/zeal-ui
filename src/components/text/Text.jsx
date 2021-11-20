import React from 'react';
import { MainHeadingStyled, SubHeading1Styled, SubHeading2Styled, TextStyled } from './TextStyled';

const Text = ({ width, height, type, size, center, bold, scrollAuto, children, ...rest }) => {
	const headingProps = {
		width,
		height,
		size,
		center,
		bold,
	};

	const textProps = {
		...headingProps,
		scrollAuto,
	};

	if (type === 'mainHeading') {
		return (
			<MainHeadingStyled {...headingProps} {...rest}>
				{children}
			</MainHeadingStyled>
		);
	}

	if (type === 'subHeading1') {
		return (
			<SubHeading1Styled {...headingProps} {...rest}>
				{children}
			</SubHeading1Styled>
		);
	}

	if (type === 'subHeading2') {
		return (
			<SubHeading2Styled {...headingProps} {...rest}>
				{children}
			</SubHeading2Styled>
		);
	}

	return (
		<TextStyled {...textProps} {...rest}>
			{children}
		</TextStyled>
	);
};

export default Text;
