import React, { useRef } from 'react';
import { useClickAway } from '../../index';
import { ModalBackdropStyled, ModalContainerStyled } from './ModalStyled';

const Modal = ({ isOpen, onClickAway, position, color, children, ...rest }) => {
	const ref = useRef();
	useClickAway(ref, isOpen, onClickAway);

	return (
		isOpen && (
			<ModalBackdropStyled type="row" width="100%" height="100%" rowCenter>
				<ModalContainerStyled ref={ref} position={position} color={color} {...rest}>
					{children}
				</ModalContainerStyled>
			</ModalBackdropStyled>
		)
	);
};

export default Modal;
