import React from 'react';
import DividerStyled from './DividerStyled';

const Divider = ({ width, height, color, ...rest }) => {
	return <DividerStyled width={width} height={height} color={color} {...rest} />;
};

export default Divider;
