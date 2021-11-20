import React from 'react';
import AlertStyled from './AlertStyled';

const Alert = ({ width, height, type, children, ...rest }) => {
	return (
		<AlertStyled width={width} height={height} type={type} {...rest}>
			{children}
		</AlertStyled>
	);
};

export default Alert;
