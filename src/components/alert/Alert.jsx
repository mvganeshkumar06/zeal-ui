import React from 'react';
import AlertStyled from './AlertStyled';
import { useColorMode } from '../../index';

const Alert = ({ width, height, type, children, ...rest }) => {
	const { colorMode } = useColorMode();
	return (
		<AlertStyled width={width} height={height} type={type} colorMode={colorMode} {...rest}>
			{children}
		</AlertStyled>
	);
};

export default Alert;
