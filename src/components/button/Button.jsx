import React from 'react';
import ButtonStyled from './ButtonStyled';

const Button = ({
	width,
	height,
	color,
	floating,
	top,
	right,
	bottom,
	left,
	children,
	...rest
}) => {
	return (
		<ButtonStyled
			width={width}
			height={height}
			color={color}
			floating={floating}
			top={top}
			right={right}
			bottom={bottom}
			left={left}
			{...rest}
		>
			{children}
		</ButtonStyled>
	);
};

export default Button;
