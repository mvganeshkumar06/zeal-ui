import React from 'react';
import SpinnerStyled from './SpinnerStyled';

const Spinner = ({ width, height, color, ...rest }) => {
	return <SpinnerStyled width={width} height={height} color={color} {...rest} />;
};

export default Spinner;
