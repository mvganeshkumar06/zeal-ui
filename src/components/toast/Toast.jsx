import React, { useEffect } from 'react';
import { ToastBackdropStyled, ToastContainerStyled } from './ToastStyled';

const Toast = ({ isOpen, onClose, delay = 3000, position, color, children, ...rest }) => {
	useEffect(() => {
		if (isOpen) {
			const timerID = setTimeout(() => onClose(), delay);
			return () => clearTimeout(timerID);
		}
	}, [isOpen]);

	return (
		isOpen && (
			<ToastBackdropStyled width="100%" height="100%" type="col" position={position}>
				<ToastContainerStyled position={position} color={color} {...rest}>
					{children}
				</ToastContainerStyled>
			</ToastBackdropStyled>
		)
	);
};

export default Toast;
