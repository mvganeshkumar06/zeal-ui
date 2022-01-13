import React, { useEffect } from 'react';
import ToastContainerStyled from './ToastStyled';

const Toast = ({
	top,
	right,
	bottom,
	left,
	isOpen,
	onClose,
	delay = 3000,
	color,
	children,
	...rest
}) => {
	useEffect(() => {
		if (isOpen) {
			const timerID = setTimeout(() => onClose(), delay);
			return () => clearTimeout(timerID);
		}
	}, [isOpen]);

	return (
		isOpen && (
			<ToastContainerStyled
				top={top}
				right={right}
				bottom={bottom}
				left={left}
				color={color}
				{...rest}
			>
				{children}
			</ToastContainerStyled>
		)
	);
};

export default Toast;
