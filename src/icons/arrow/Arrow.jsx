import React from 'react';
import {
	ArrowContainerStyled,
	TopArrowStyled,
	BottomArrowStyled,
	LeftArrowStyled,
	RightArrowStyled,
} from './ArrowStyled';

const getArrow = (type, color) => {
	if (type === 'top') {
		return <TopArrowStyled color={color} />;
	}
	if (type === 'bottom') {
		return <BottomArrowStyled color={color} />;
	}
	if (type === 'left') {
		return <LeftArrowStyled color={color} />;
	}
	return <RightArrowStyled color={color} />;
};

const Arrow = ({ type, color, withBorder, ...rest }) => {
	return (
		<ArrowContainerStyled color={color} withBorder={withBorder} {...rest}>
			{getArrow(type, color)}
		</ArrowContainerStyled>
	);
};

export default Arrow;
