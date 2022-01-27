import React, { useRef } from 'react';
import { useClickAway } from '../../index';
import { MenuContainerStyled, MenuStyled } from './MenuStyled';

const Menu = ({
	width,
	height,
	isOpen,
	onClickAway,
	color,
	top,
	right,
	bottom,
	left,
	children,
	...rest
}) => {
	const ref = useRef();
	useClickAway(ref, isOpen, onClickAway);
	return (
		isOpen && (
			<MenuContainerStyled>
				<MenuStyled
					ref={ref}
					width={width}
					height={height}
					color={color}
					top={top}
					right={right}
					bottom={bottom}
					left={left}
					{...rest}
				>
					{children}
				</MenuStyled>
			</MenuContainerStyled>
		)
	);
};

export default Menu;
