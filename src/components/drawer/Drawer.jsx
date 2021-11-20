import React, { useRef } from 'react';
import { useClickAway } from '../../index';
import { DrawerBackdropStyled, DrawerContainerStyled } from './DrawerStyled';

const Drawer = ({ isOpen, onClickAway, position, color, children, ...rest }) => {
	const ref = useRef();
	useClickAway(ref, isOpen, onClickAway);
	return (
		isOpen && (
			<DrawerBackdropStyled type="row" width="100%" height="100%" rowCenter>
				<DrawerContainerStyled ref={ref} position={position} color={color} {...rest}>
					{children}
				</DrawerContainerStyled>
			</DrawerBackdropStyled>
		)
	);
};

export default Drawer;
